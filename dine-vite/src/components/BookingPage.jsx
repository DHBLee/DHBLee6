import { React, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import logo from '../assets/images/logo.svg';
const BookingPage = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [month, setMonth] = useState("")
    const [day, setDay] = useState("")
    const [year, setYear] = useState("")
    const [hours, setHours] = useState("")
    const [minutes, setMinutes] = useState("")
    const [ampm, setAmpm] = useState("AM")
    const [people, setPeople] = useState(1);
    const navigate = useNavigate();

    const [errors, setErrors] = useState({
        name: false,
        email: false,
        month: false,
        day: false,
        year: false,
        hours: false,
        minutes: false
    });

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const validateDate = (month, day, year) => {
        const monthNum = parseInt(month, 10);
        const dayNum = parseInt(day, 10);
        const yearNum = parseInt(year, 10);

        return (
            monthNum >= 1 &&
            monthNum <= 12 &&
            dayNum >= 1 &&
            dayNum <= 31 &&
            yearNum >= 2024 
        );
        };

    const validateTime = (hours, minutes) => {
    const hoursNum = parseInt(hours, 10);
    const minutesNum = parseInt(minutes, 10);

    return hoursNum >= 0 && hoursNum <= 23 && minutesNum >= 0 && minutesNum <= 59;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    

        const newErrors = {
          name: !name.trim(),
          email: !validateEmail(email),
          month: !month.trim() || !validateDate(month, day, year),
          day: !day.trim() || !validateDate(month, day, year),
          year: !year.trim() || !validateDate(month, day, year),
          hours: !hours.trim() || !validateTime(hours, minutes),
          minutes: !minutes.trim() || !validateTime(hours, minutes),
        };
    
        setErrors(newErrors);
    
        if (Object.values(newErrors).some((error) => error)) {
          console.log("Form has errors. Please fix them.");
          return;
        }
        console.log("Form submitted successfully!");
      };

  const handeHomepageClick = () => {
    navigate("/");
  };

  return (
    <section>
        <div className='grid gap-11 pt-[56px] pb-[228px] md:pb-[288px] bookingBg px-6 md:px-[97px] 1440:px-[165px]'>
            <img src={logo} alt=""  className='mx-auto md:mx-0 cursor-pointer' onClick={handeHomepageClick}/>
            <div className='grid gap-[13px] text-white text-center 1440:text-left'>
                <h1 className='headingXL font-extralight'>Reservations</h1>
                <p className='body2 md:body1 font-extralight 1440:max-w-[50ch]'>We can't wait to host you. If you have any special requirements please feel free to call on the phone number below. We'll be happy to accommodate you.</p>
                <button className='md:hidden border-white text-white headingS  !font-normal border-[1px] px-[55px] py-[15px] w-max mx-auto'>
                    RESERVE PLACE
                </button>
            </div>
        </div>
        <form
      className="relative z-20 bg-white flex flex-col gap-8 p-8 md:p-12 mb-[86px] 1440:right-[-45%] 1440:top-[-14rem] 1440:max-w-[550px] mx-6 md:mx-[97px] 1440:mx-[165px] mt-[-9rem] md:mt-[-15rem] shadow-[0_4px_8px_-1px_rgba(0,0,0,0.2),0_2px_4px_-1px_rgba(0,0,0,0.1)]"
      onSubmit={handleSubmit}
    >

      <fieldset className={`p-[10px] border-b-2 border-gray-300 ${errors.name ? "border-red-500" : ""}`}>
        <label htmlFor="name"></label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          className={`body1 w-full ${errors.name ? "red-placeholder" : ""}`}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name && <p className="text-red-500 text-sm relative bottom-[-2.8rem]">This field is required.</p>}
      </fieldset>

      <fieldset className={`p-[10px] border-b-2 border-gray-300 ${errors.email ? "border-red-500" : ""}`}>
        <label htmlFor="email"></label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          className={`body1 w-full ${errors.email ? "red-placeholder" : ""}`}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        
        />
        {errors.email && <p className="text-red-500 text-sm relative bottom-[-2.8rem]">This field is required.</p>}
      </fieldset>

      <fieldset className="flex flex-col md:flex-row md:gap-[65px] md:items-center">
        <label htmlFor="date" className={`grid body1 ${errors.month || errors.day || errors.year ? "text-red" : ""}`}>
          Pick a date
          {(errors.month || errors.day || errors.year) && (
          <p className="text-red-500 text-sm">This field is incomplete</p>
        )}
        </label>
        <div className="flex gap-2 flex-1">
          <input
            type="text"
            name="month"
            id="month"
            className={`p-[10px] border-b-2 border-gray-300 w-[4rem] body1 ${
              errors.month ? "border-red-500 red-placeholder" : ""
            }`}
            placeholder="MM"
            maxLength={2}
            pattern="\d{2}"
            value={month}
            onChange={(e) => setMonth(e.target.value)}
           
            required
          />
          <input
            type="text"
            name="day"
            id="day"
            className={`p-[10px] border-b-2 border-gray-300 w-[4rem] body1 ${
              errors.day ? "border-red-500 red-placeholder" : ""
            }`}
            placeholder="DD"
            maxLength={2}
            pattern="\d{2}"
            value={day}
            onChange={(e) => setDay(e.target.value)}
            
            required
          />
          <input
            type="text"
            name="year"
            id="year"
            className={`p-[10px] border-b-2 border-gray-300 w-[4rem] body1 ${
              errors.year ? "border-red-500 red-placeholder" : ""
            }`}
            placeholder="YYYY"
            maxLength={4}
            pattern="\d{4}"
            value={year}
            onChange={(e) => setYear(e.target.value)}
           
            required
          />
        </div>
      </fieldset>

      <fieldset className="flex flex-col md:flex-row gap-[65px] md:items-center">
        <label htmlFor="time" className={`grid body1 ${errors.hours || errors.minutes ? "text-red" : ""}`}>
          Pick a time
          {(errors.hours || errors.minutes) && (
          <p className="text-red-500 text-sm">This field is incomplete</p>
        )}
        </label>
        <div className="flex gap-2 flex-1">
          <input
            type="text"
            name="hours"
            id="hours"
            className={`p-[10px] w-[4rem] px-3 py-2 border-b border-gray-300 focus:outline-none body1 ${
              errors.hours ? "border-red-500 red-placeholder" : ""
            }`}
            placeholder="09"
            maxLength={2}
            pattern="\d{2}"
            value={hours}
            onChange={(e) => setHours(e.target.value)}
            
            required
          />
          <input
            type="text"
            name="minutes"
            id="minutes"
            className={`p-[10px] w-[4rem] px-3 py-2 border-b border-gray-300 focus:outline-none body1 ${
              errors.minutes ? "border-red-500 red-placeholder" : ""
            }`}
            placeholder="00"
            maxLength={2}
            pattern="\d{2}"
            value={minutes}
            onChange={(e) => setMinutes(e.target.value)}
           
            required
          />
          <select
            name="ampm"
            id="ampm"
            className="p-[10px] flex-1 w-[4rem] px-3 py-2 border-b border-gray-300 focus:outline-none "
            value={ampm}
            onChange={(e) => setAmpm(e.target.value)}
            required
          >
            <option value="AM">AM</option>
            <option value="PM">PM</option>
          </select>
        </div>

      </fieldset>


      <fieldset>
        <label htmlFor="people"></label>
        <div className="flex items-center justify-between gap-2 border-b border-gray-300">
          <button
            type="button"
            className="px-3 py-1 hover:bg-gray-100 focus:outline-none"
            onClick={() => setPeople((prev) => (prev > 1 ? prev - 1 : 1))}
          >
            -
          </button>
          <div className="flex font-bold body1">
            <input
              type="number"
              name="people"
              id="people"
              className="text-center focus:outline-none"
              value={people}
              min="1"
              max="10"
              readOnly
              required
            />
            <span>people</span>
          </div>
          <button
            type="button"
            className="px-3 py-1 hover:bg-gray-100 focus:outline-none"
            onClick={() => setPeople((prev) => (prev < 10 ? prev + 1 : 10))}
          >
            +
          </button>
        </div>
      </fieldset>

      <button
        type="submit"
        className="headingS whitespace-normal border-2 bg-black hover:bg-white hover:text-black hover:border-black text-white px-[55px] py-[15px] mx-auto w-full max-w-full"
      >
        MAKE RESERVATION
      </button>
    </form>
    </section>
  );
};
export default BookingPage