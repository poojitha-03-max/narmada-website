// Synthesizes a soothing, gentle Indian acoustic ambient drone & warm fireplace crackle
// Using standard Web Audio API without any external dependencies

class AmbientSoundEngine {
  private ctx: AudioContext | null = null;
  private isPlaying = false;
  private masterGain: GainNode | null = null;
  private oscillators: OscillatorNode[] = [];
  private noiseNode: AudioBufferSourceNode | null = null;

  public toggle(): boolean {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }

  public start() {
    if (this.isPlaying) return;

    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.01, this.ctx.currentTime);
      this.masterGain.gain.exponentialRampToValueAtTime(0.18, this.ctx.currentTime + 3);
      this.masterGain.connect(this.ctx.destination);

      // Warm Tanpura / Sitar fundamental roots: C# (138.59 Hz), G# (207.65 Hz), C# octave (277.18 Hz)
      const freqs = [138.59, 207.65, 277.18, 415.30];

      freqs.forEach((freq, idx) => {
        if (!this.ctx || !this.masterGain) return;
        const osc = this.ctx.createOscillator();
        const oscGain = this.ctx.createGain();

        osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

        // Subtle LFO modulation for breathing drone effect
        const lfo = this.ctx.createOscillator();
        const lfoGain = this.ctx.createGain();
        lfo.frequency.setValueAtTime(0.15 + idx * 0.05, this.ctx.currentTime);
        lfoGain.gain.setValueAtTime(1.5, this.ctx.currentTime);
        lfo.connect(osc.frequency);
        lfo.start();

        oscGain.gain.setValueAtTime(0.08 / (idx + 1), this.ctx.currentTime);
        osc.connect(oscGain);
        oscGain.connect(this.masterGain);
        osc.start();
        this.oscillators.push(osc);
      });

      // Warm vinyl/candle flame crackle noise
      const bufferSize = this.ctx.sampleRate * 2;
      const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        output[i] = (Math.random() > 0.99 ? white * 0.4 : white * 0.01);
      }

      this.noiseNode = this.ctx.createBufferSource();
      this.noiseNode.buffer = noiseBuffer;
      this.noiseNode.loop = true;

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(1200, this.ctx.currentTime);

      const noiseGain = this.ctx.createGain();
      noiseGain.gain.setValueAtTime(0.04, this.ctx.currentTime);

      this.noiseNode.connect(filter);
      filter.connect(noiseGain);
      noiseGain.connect(this.masterGain);
      this.noiseNode.start();

      this.isPlaying = true;
    } catch {
      this.isPlaying = false;
    }
  }

  public stop() {
    if (!this.isPlaying) return;
    try {
      if (this.masterGain && this.ctx) {
        this.masterGain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 1);
        setTimeout(() => {
          this.oscillators.forEach(osc => {
            try { osc.stop(); } catch { /* ignore */ }
          });
          this.oscillators = [];
          if (this.noiseNode) {
            try { this.noiseNode.stop(); } catch { /* ignore */ }
            this.noiseNode = null;
          }
          if (this.ctx) {
            this.ctx.close();
            this.ctx = null;
          }
        }, 1100);
      }
    } catch {
      // ignore
    }
    this.isPlaying = false;
  }
}

export const ambientSound = new AmbientSoundEngine();
