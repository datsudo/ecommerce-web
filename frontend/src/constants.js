import {
  faScrewdriverWrench,
  faUser,
  faCartShopping,
  faRightToBracket,
  faMagnifyingGlass
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


// export const BASE_URL =
//   process.env.NODE_ENV === 'develeopment' ? 'http://localhost:5000' : '';
export const BASE_URL = ''; // If using proxy
export const PRODUCTS_URL = '/api/products';
export const USERS_URL = '/api/users';
export const ORDERS_URL = '/api/orders';
export const PAYPAL_URL = '/api/config/paypal';

// Icons, labels
export const brandName = "Brand Logo"
export const searchPlaceholder = "Search..."
export const adminNavMenuLabel = ( <> <FontAwesomeIcon className='mt-1 pe-1' icon={faScrewdriverWrench} /> Admin </> )
export const userNavMenuLabel = ( <> <FontAwesomeIcon className='mt-1 pe-1' icon={faUser} /> Username </> )
export const cartNavMenuLabel = ( <> <FontAwesomeIcon className='mt-1 pe-1' icon={faCartShopping} /> Cart </> )
export const loginNavMenuLabel = ( <> <FontAwesomeIcon className='mt-1 pe-1' icon={faRightToBracket} /> Login </> ) 
export const searchBtnIcon = ( <FontAwesomeIcon icon={faMagnifyingGlass} /> )
