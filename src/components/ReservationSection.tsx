import React, { useState } from 'react';
import { Calendar, Clock, Users, Flame, Check, Sparkles, MapPin, ShieldCheck, ChevronRight, Share2, Building2 } from 'lucide-react';
import { DINING_TABLES, DiningTable, RESTAURANT_INFO, CHAIN_OUTLETS, ChainOutlet } from '../data/restaurantData';

interface ReservationSectionProps {
  onSuccessToast?: (msg: string) => void;
}

export const ReservationSection: React.FC<ReservationSectionProps> = ({ onSuccessToast }) => {
  const [selectedOutlet, setSelectedOutlet] = useState<ChainOutlet>(CHAIN_OUTLETS[0]); // BTM Layout Flagship
  const [selectedChamber, setSelectedChamber] = useState<string>('all');
  const [selectedTable, setSelectedTable] = useState<DiningTable | null>(DINING_TABLES[0]);
  const [guestCount, setGuestCount] = useState(4);
  const [reservationDate, setReservationDate] = useState('2026-10-02');
  const [selectedTime, setSelectedTime] = useState('08:00 PM');
  const [experienceType, setExperienceType] = useState('Narmadha Royal Bhojanam (Andhra Feast)');
  const [guestName, setGuestName] = useState('');
  const [guestPhone, setGuestPhone] = useState('');
  const [guestEmail, setGuestEmail] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');
  const [confirmedBooking, setConfirmedBooking] = useState<{
    code: string;
    outlet: ChainOutlet;
    table: DiningTable;
    date: string;
    time: string;
    guests: number;
    name: string;
  } | null>(null);

  const chambers = [
    { id: 'all', label: 'All Chambers' },
    { id: 'The BTM Amber Grand Hall', label: 'The BTM Amber Grand Hall' },
    { id: 'Maharaja Family Alcove', label: 'Maharaja AC Alcove' },
    { id: 'Live Tandoor & Dosa Gallery', label: 'Live Tandoor & Dosa Gallery' },
    { id: '100ft Road Terrace Verandah', label: 'Terrace Verandah' }
  ];

  const timeSlots = [
    '12:00 PM', '12:45 PM', '01:30 PM', '02:15 PM',
    '07:00 PM', '07:45 PM', '08:30 PM', '09:15 PM', '10:00 PM'
  ];

  const occasions = [
    'A La Carte Royal Dining',
    'Narmadha Royal Bhojanam (Andhra Feast)',
    'The BTM Layout Maharaja Tasting Banquet',
    'Family Weekend Celebration',
    'Corporate Team Dinner'
  ];

  const filteredTables = DINING_TABLES.filter(t => {
    if (selectedChamber === 'all') return true;
    return t.chamber === selectedChamber;
  });

  const handleBookTable = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedTable) return;
    if (!guestName || !guestPhone) {
      alert("Please enter your name and phone number for reservation confirmation.");
      return;
    }

    const bookingRef = `NRM-BTM-${Math.floor(1000 + Math.random() * 9000)}`;
    setConfirmedBooking({
      code: bookingRef,
      outlet: selectedOutlet,
      table: selectedTable,
      date: reservationDate,
      time: selectedTime,
      guests: guestCount,
      name: guestName
    });

    if (onSuccessToast) {
      onSuccessToast(`Reservation confirmed at Narmadha BTM Layout! Reference: ${bookingRef}`);
    }
  };

  return (
    <section id="reservation-section" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-amber-400 mb-3">
          <Flame className="w-3.5 h-3.5 text-amber-500 animate-candle-flame" />
          <span>Table Bookings · Narmadha Chain of Restaurants</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-serif font-bold text-stone-100 tracking-tight mb-4 [text-wrap:balance]">
          Reserve Your Table at Narmadha BTM Layout
        </h2>
        <p className="text-stone-300 text-sm sm:text-base font-light leading-relaxed [text-wrap:balance]">
          Flagship Outlet on 100 Feet Ring Road, BTM 2nd Stage, Bangalore. Book in the Amber Grand Hall or select an intimate private family suite.
        </p>

        {/* Chain Outlets Quick Switcher */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
          {CHAIN_OUTLETS.map(outlet => {
            const isSelected = selectedOutlet.id === outlet.id;
            return (
              <button
                key={outlet.id}
                onClick={() => setSelectedOutlet(outlet)}
                className={`px-3 py-1.5 rounded-lg border text-xs font-medium transition-all flex items-center gap-1.5 cursor-pointer ${
                  isSelected
                    ? 'bg-amber-500/20 border-amber-400 text-amber-300 shadow-sm'
                    : 'bg-stone-900/60 border-stone-800 text-stone-400 hover:text-stone-200'
                }`}
              >
                <Building2 className="w-3 h-3 text-amber-400" />
                <span>{outlet.name}</span>
                {outlet.isFlagship && (
                  <span className="text-[10px] text-amber-400 font-bold bg-amber-950 px-1.5 rounded">FLAGSHIP</span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {confirmedBooking ? (
        /* Confirmed Booking State */
        <div className="max-w-2xl mx-auto bg-[#140e0a] border border-amber-500/40 rounded-2xl p-6 sm:p-10 shadow-2xl text-center">
          <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-amber-600 to-amber-400 flex items-center justify-center mx-auto mb-6 text-stone-950 shadow-lg">
            <Check className="w-8 h-8 stroke-[3]" />
          </div>

          <div className="text-xs uppercase tracking-widest text-amber-400 font-semibold mb-2">
            Table Reserved at {confirmedBooking.outlet.name}
          </div>
          <h3 className="font-serif text-3xl font-bold text-stone-100 mb-2">
            Namaskara, {confirmedBooking.name}!
          </h3>
          <p className="text-stone-400 text-xs sm:text-sm mb-6">
            Your table reservation is confirmed. We will keep your table dressed with fresh brass tableware, brass diyas, and linen napkins.
          </p>

          <div className="bg-stone-950/80 border border-amber-900/40 rounded-xl p-5 mb-8 text-left grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
            <div>
              <span className="text-stone-400 block text-[11px] mb-1">Booking Ref</span>
              <span className="font-mono font-bold text-amber-300 text-sm">{confirmedBooking.code}</span>
            </div>
            <div>
              <span className="text-stone-400 block text-[11px] mb-1">Table & Chamber</span>
              <span className="font-semibold text-stone-200">Table #{confirmedBooking.table.number}</span>
              <span className="text-[10px] text-stone-400 block">{confirmedBooking.table.chamber}</span>
            </div>
            <div>
              <span className="text-stone-400 block text-[11px] mb-1">Date & Time</span>
              <span className="font-semibold text-stone-200">{confirmedBooking.date}</span>
              <span className="text-[10px] text-stone-400 block">{confirmedBooking.time}</span>
            </div>
            <div>
              <span className="text-stone-400 block text-[11px] mb-1">Guests</span>
              <span className="font-semibold text-stone-200">{confirmedBooking.guests} Guests</span>
              <span className="text-[10px] text-amber-400 block truncate">{experienceType}</span>
            </div>
          </div>

          <div className="p-3 rounded-lg bg-stone-900/60 border border-stone-800 text-xs text-left mb-6 text-stone-300 flex items-start gap-2">
            <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <div className="font-medium text-amber-200">{confirmedBooking.outlet.address}</div>
              <div className="text-[11px] text-stone-400">Landmark: {confirmedBooking.outlet.landmark} · Valet parking available</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setConfirmedBooking(null)}
              className="w-full sm:w-auto px-6 py-2.5 bg-stone-900 hover:bg-stone-800 border border-stone-700 text-stone-200 text-xs font-semibold rounded-lg transition-colors cursor-pointer"
            >
              Reserve Another Table
            </button>
            <button
              onClick={() => {
                navigator.clipboard?.writeText?.(`Narmadha BTM Layout: Table #${confirmedBooking.table.number}, ${confirmedBooking.date} at ${confirmedBooking.time}. Reference: ${confirmedBooking.code}. Location: 100 Feet Ring Road, BTM 2nd Stage`);
                alert("Booking details copied to clipboard!");
              }}
              className="w-full sm:w-auto px-6 py-2.5 bg-gradient-to-r from-amber-400 to-amber-500 text-stone-950 text-xs font-bold rounded-lg shadow-md hover:from-amber-300 hover:to-amber-400 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>Share Booking Details</span>
            </button>
          </div>
        </div>
      ) : (
        /* Reservation Booking Form & Interactive Seating Map */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Chamber Table Selector (7 cols) */}
          <div className="lg:col-span-7 bg-[#140e0a]/90 border border-amber-900/40 rounded-2xl p-6 sm:p-8 backdrop-blur-md">
            
            {/* Active Outlet Banner */}
            <div className="p-3.5 rounded-xl bg-amber-950/30 border border-amber-500/30 mb-6 flex items-start justify-between gap-3">
              <div className="flex items-start gap-2.5 text-xs">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-amber-200">{selectedOutlet.name}</div>
                  <div className="text-stone-300 text-[11px]">{selectedOutlet.address}</div>
                  <div className="text-amber-400/80 text-[10px] mt-0.5">{selectedOutlet.landmark} · {selectedOutlet.timing}</div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between flex-wrap gap-3 mb-6">
              <div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-100">
                  Select Your Dining Chamber & Table
                </h3>
                <p className="text-xs text-stone-400">
                  Click any table node below to select your spot in our BTM Layout restaurant
                </p>
              </div>

              {/* Chamber Filter */}
              <div className="flex items-center gap-1.5 p-1 bg-stone-950 rounded-lg border border-stone-800 text-xs overflow-x-auto max-w-full">
                {chambers.map(c => (
                  <button
                    key={c.id}
                    onClick={() => setSelectedChamber(c.id)}
                    className={`px-3 py-1.5 rounded-md whitespace-nowrap transition-colors cursor-pointer ${
                      selectedChamber === c.id
                        ? 'bg-amber-500/20 text-amber-300 font-semibold border border-amber-500/40'
                        : 'text-stone-400 hover:text-stone-200'
                    }`}
                  >
                    {c.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Interactive Table Map Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
              {filteredTables.map(table => {
                const isSelected = selectedTable?.id === table.id;
                const isReserved = table.status === 'reserved';

                return (
                  <button
                    key={table.id}
                    disabled={isReserved}
                    onClick={() => setSelectedTable(table)}
                    className={`p-4 rounded-xl border text-left transition-all relative flex flex-col justify-between min-h-[110px] cursor-pointer ${
                      isReserved
                        ? 'bg-stone-950/40 border-stone-900 opacity-40 cursor-not-allowed'
                        : isSelected
                        ? 'bg-gradient-to-br from-amber-950/80 to-amber-900/40 border-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.2)]'
                        : 'bg-stone-900/60 border-stone-800/80 hover:border-amber-600/50 hover:bg-stone-900'
                    }`}
                  >
                    {/* Top Row: Table # and Capacity */}
                    <div className="flex items-center justify-between">
                      <span className={`font-serif text-lg font-bold ${isSelected ? 'text-amber-200' : 'text-stone-200'}`}>
                        Table {table.number}
                      </span>
                      <div className="flex items-center gap-1 text-xs text-stone-400">
                        <Users className="w-3 h-3" />
                        <span>{table.capacity}p</span>
                      </div>
                    </div>

                    {/* Table Type Description */}
                    <div>
                      <div className="text-[11px] font-medium text-amber-400/90 truncate">
                        {table.type}
                      </div>
                      <div className="text-[10px] text-stone-400 truncate">
                        {table.chamber}
                      </div>
                    </div>

                    {/* Status Badge */}
                    <div className="mt-2 text-[10px] flex items-center justify-between border-t border-stone-800/60 pt-1.5">
                      <span className={isReserved ? 'text-rose-400' : isSelected ? 'text-amber-300 font-bold' : 'text-emerald-400'}>
                        {isReserved ? 'Occupied Tonight' : isSelected ? 'Selected Table' : 'Available'}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Selected Table Detail Callout */}
            {selectedTable && (
              <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-500/30 flex items-start gap-3">
                <Sparkles className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="font-semibold text-amber-300 block mb-0.5">
                    Selected: Table {selectedTable.number} ({selectedTable.chamber})
                  </span>
                  <p className="text-stone-300 font-light">
                    {selectedTable.viewDescription} Accommodates up to {selectedTable.capacity} guests comfortably in our BTM restaurant.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Reservation Details & Contact (5 cols) */}
          <form
            onSubmit={handleBookTable}
            className="lg:col-span-5 bg-[#140e0a]/90 border border-amber-900/40 rounded-2xl p-6 sm:p-8 backdrop-blur-md"
          >
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-100 mb-6">
              Reservation Details
            </h3>

            {/* Date & Guests */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="text-xs text-stone-400 block mb-1.5 font-medium">Date</label>
                <div className="relative">
                  <input
                    type="date"
                    value={reservationDate}
                    onChange={(e) => setReservationDate(e.target.value)}
                    className="w-full bg-stone-900 border border-stone-800 rounded-lg px-3 py-2 text-xs text-stone-200 focus:outline-amber-400 cursor-pointer"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs text-stone-400 block mb-1.5 font-medium">Party Size</label>
                <div className="flex items-center justify-between bg-stone-900 border border-stone-800 rounded-lg px-2 py-1">
                  <button
                    type="button"
                    onClick={() => setGuestCount(Math.max(1, guestCount - 1))}
                    className="w-6 h-6 rounded text-stone-400 hover:text-white flex items-center justify-center cursor-pointer"
                  >
                    -
                  </button>
                  <span className="text-xs font-semibold text-amber-200 tabular-nums">
                    {guestCount} Guests
                  </span>
                  <button
                    type="button"
                    onClick={() => setGuestCount(Math.min(selectedTable?.capacity || 10, guestCount + 1))}
                    className="w-6 h-6 rounded text-stone-400 hover:text-white flex items-center justify-center cursor-pointer"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Time Slot Selector */}
            <div className="mb-4">
              <label className="text-xs text-stone-400 block mb-1.5 font-medium">Seating Time (Lunch & Dinner)</label>
              <div className="grid grid-cols-3 gap-2">
                {timeSlots.map(time => (
                  <button
                    key={time}
                    type="button"
                    onClick={() => setSelectedTime(time)}
                    className={`py-1.5 px-1 text-[11px] rounded-lg border transition-colors cursor-pointer ${
                      selectedTime === time
                        ? 'bg-amber-500/20 border-amber-400 text-amber-200 font-semibold'
                        : 'bg-stone-900 border-stone-800 text-stone-400 hover:text-stone-200'
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            {/* Experience / Occasion */}
            <div className="mb-4">
              <label className="text-xs text-stone-400 block mb-1.5 font-medium">Dining Experience</label>
              <select
                value={experienceType}
                onChange={(e) => setExperienceType(e.target.value)}
                className="w-full bg-stone-900 border border-stone-800 rounded-lg px-3 py-2 text-xs text-stone-200 focus:outline-amber-400 cursor-pointer"
              >
                {occasions.map(occ => (
                  <option key={occ} value={occ}>{occ}</option>
                ))}
              </select>
            </div>

            {/* Guest Name & Phone */}
            <div className="space-y-3 mb-6">
              <div>
                <label className="text-xs text-stone-400 block mb-1 font-medium">Guest Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ramesh Reddy / Priya Rao"
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                  className="w-full bg-stone-900 border border-stone-800 rounded-lg px-3 py-2 text-xs text-stone-200 placeholder-stone-600 focus:outline-amber-400"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs text-stone-400 block mb-1 font-medium">Mobile (for SMS confirmation)</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98450 12345"
                    value={guestPhone}
                    onChange={(e) => setGuestPhone(e.target.value)}
                    className="w-full bg-stone-900 border border-stone-800 rounded-lg px-3 py-2 text-xs text-stone-200 placeholder-stone-600 focus:outline-amber-400"
                  />
                </div>
                <div>
                  <label className="text-xs text-stone-400 block mb-1 font-medium">Email Address</label>
                  <input
                    type="email"
                    placeholder="guest@gmail.com"
                    value={guestEmail}
                    onChange={(e) => setGuestEmail(e.target.value)}
                    className="w-full bg-stone-900 border border-stone-800 rounded-lg px-3 py-2 text-xs text-stone-200 placeholder-stone-600 focus:outline-amber-400"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs text-stone-400 block mb-1 font-medium">Special Requests & Dietary (Jain, High Spice)</label>
                <textarea
                  rows={2}
                  placeholder="e.g. Pure Vegetarian setup, High spice Andhra Kodi Vepudu, anniversary candle"
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                  className="w-full bg-stone-900 border border-stone-800 rounded-lg px-3 py-2 text-xs text-stone-200 placeholder-stone-600 focus:outline-amber-400 resize-none"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3.5 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-stone-950 font-bold text-xs uppercase tracking-wider rounded-lg shadow-lg hover:shadow-[0_0_25px_rgba(245,158,11,0.3)] transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Confirm Table Booking at BTM Layout</span>
              <ChevronRight className="w-4 h-4" />
            </button>

            <div className="mt-3 flex items-center justify-center gap-2 text-[11px] text-stone-500 text-center">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-500" />
              <span>Complimentary cancellation up to 2 hours prior · No advance deposit</span>
            </div>
          </form>

        </div>
      )}
    </section>
  );
};
