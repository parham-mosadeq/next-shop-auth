import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/app/store';
import { getName, getEmail, getPassword } from '../redux/features/signupSlice';
// * dynamic form for both login and sign up
// * more types will be added, such as funcs to send data to data base!
type Props = { btnTxt: String; handleSubmit: Function };

export default function AccountFrom({ btnTxt, handleSubmit }: Props) {
  const { name, email, password } = useSelector(
    (state: RootState) => state.formState
  );
  const dispatch = useDispatch();

  return (
    <>
      <form className='flex flex-col justify-center'>
        {/* name */}
        <div className='flex justify-center items-center'>
          <input
            className='my-4 rounded-[5px] focus:outline-none block border-2 border-blue-500'
            type='text'
            placeholder='Name'
            id='name'
            required
            value={name}
            onChange={(e) => dispatch(getName(e.target.value))}
          />
        </div>
        {/* email */}
        <div className='flex justify-center items-center'>
          <input
            className='my-4 rounded-[5px] focus:outline-none block border-2 border-blue-500'
            type='text'
            placeholder='Email'
            id='email'
            required
            value={email}
            onChange={(e) => dispatch(getEmail(e.target.value))}
          />
        </div>
        {/* password */}
        <div className='flex justify-center items-center'>
          <input
            className='my-4 rounded-[5px] focus:outline-none block border-2 border-blue-500'
            type='text'
            placeholder='Password'
            id='password'
            required
            value={password}
            onChange={(e) => dispatch(getPassword(e.target.value))}
          />
        </div>
        <button
          onClick={(e) => handleSubmit(e)}
          type='submit'
          className='my-2 text-centers  bg-blue-500 w-fit mx-auto px-3 py-1 rounded-md text-white active:scale-95'
        >
          {btnTxt}
        </button>
      </form>
    </>
  );
}
