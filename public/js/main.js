import Menu from "./MENU/MENU";
import Favorites from "./Favorites/Favorites.js";
import Devices from "./Favorites/Device.js";
import TV from "./Favorites/Tv.js";
import KID from "./Favorites/Kids.js";
import Online from "./Favorites/Online.js";
import Faqs from "./Favorites/Faq.js";
import Subscription from "./Favorites/Subscribe.js";

Menu();
Favorites();
Devices()
TV()
KID()
Online()
Faqs()
Subscription()

// fonts


const footer = `
  <footer class="bg-[#1b1b1b] fixed bottom-0 w-full h-8 flex flex-row items-center justify-center py-4 z-50 text-xs text-white">
    <div class="flex justify-between items-center w-full px-8">
      
      <!-- Social Links (شبکه‌های اجتماعی) on the left -->
      <div class="relative group">
        <a href="#" class="flex flex-row-reverse items-center hover:underline">
          <svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <g fill="#959595">
              <path d="M12 17a1 1 0 0 1-.77-.36l-5-6A1 1 0 0 1 7 9H17a1 1 0 0 1 .77 1.64l-5 6A1 1 0 0 1 12 17Z"></path>
            </g>
          </svg>
          شبکه‌های اجتماعی
        </a>
        <div class="absolute left-0 bottom-full mb-2 bg-[#2b2b2b] py-2 w-48 hidden group-hover:block z-50">
          <a href="#" class="flex px-4 py-2 justify-center gap-3 hover:bg-gray-700">آپارات<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><defs><g id="ui-icon-redvod" viewBox="0 0 24 24"><path d="M10.56 2.12 8.63 1.61a3.25 3.25 0 0 0-4 2.31L4.17 5.74A10 10 0 0 1 10.56 2.12Z"></path><path d="M2.08 13.59l-.47 1.78a3.25 3.25 0 0 0 2.31 4l1.85.49A10 10 0 0 1 2.08 13.59Z"></path><path d="M20.08 4.65 18 4.1a9.94 9.94 0 0 1 3.81 6.67l.57-2.14A3.25 3.25 0 0 0 20.08 4.65Z"></path><path d="M13.39 21.86l2 .53a3.25 3.25 0 0 0 4-2.31l.56-2.1A10 10 0 0 1 13.39 21.86Z"></path><path d="M12 2.9A9.1 9.1 0 1 0 21.1 12 9.09 9.09 0 0 0 12 2.9ZM6.84 7.44a2.6 2.6 0 1 1 2.07 3A2.6 2.6 0 0 1 6.84 7.44Zm3.79 7.86a2.6 2.6 0 1 1-2.06-3A2.6 2.6 0 0 1 10.63 15.3Zm.19-3.45a1.16 1.16 0 1 1 .91 1.35A1.15 1.15 0 0 1 10.82 11.85Zm6.34 4.71a2.6 2.6 0 1 1-2.07-3A2.6 2.6 0 0 1 17.16 16.56Zm1.32-6.88a2.6 2.6 0 1 1-2.06-3A2.6 2.6 0 0 1 18.48 9.68Z"></path></g></defs><g fill="#959595"><path d="M10.56 2.12 8.63 1.61a3.25 3.25 0 0 0-4 2.31L4.17 5.74A10 10 0 0 1 10.56 2.12Z"></path><path d="M2.08 13.59l-.47 1.78a3.25 3.25 0 0 0 2.31 4l1.85.49A10 10 0 0 1 2.08 13.59Z"></path><path d="M20.08 4.65 18 4.1a9.94 9.94 0 0 1 3.81 6.67l.57-2.14A3.25 3.25 0 0 0 20.08 4.65Z"></path><path d="M13.39 21.86l2 .53a3.25 3.25 0 0 0 4-2.31l.56-2.1A10 10 0 0 1 13.39 21.86Z"></path><path d="M12 2.9A9.1 9.1 0 1 0 21.1 12 9.09 9.09 0 0 0 12 2.9ZM6.84 7.44a2.6 2.6 0 1 1 2.07 3A2.6 2.6 0 0 1 6.84 7.44Zm3.79 7.86a2.6 2.6 0 1 1-2.06-3A2.6 2.6 0 0 1 10.63 15.3Zm.19-3.45a1.16 1.16 0 1 1 .91 1.35A1.15 1.15 0 0 1 10.82 11.85Zm6.34 4.71a2.6 2.6 0 1 1-2.07-3A2.6 2.6 0 0 1 17.16 16.56Zm1.32-6.88a2.6 2.6 0 1 1-2.06-3A2.6 2.6 0 0 1 18.48 9.68Z"></path></g></svg></a>
          <a href="#" class="flex px-4 py-2 justify-center gap-3 hover:bg-gray-700">توییتر<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><defs><g id="ui-icon-twitter" viewBox="0 0 24 24"><path d="M22.63 5.33a8.51 8.51 0 0 1-2.47.7 4.4 4.4 0 0 0 1.9-2.45 8.53 8.53 0 0 1-2.74 1.08 4.21 4.21 0 0 0-6.07-.2 4.45 4.45 0 0 0-1.36 3.21 4.88 4.88 0 0 0 .11 1A12.1 12.1 0 0 1 3.13 4.09 4.49 4.49 0 0 0 4.45 10 4.21 4.21 0 0 1 2.5 9.42v.05A4.4 4.4 0 0 0 6 13.8 4.24 4.24 0 0 1 4 13.87a4.33 4.33 0 0 0 4 3.07 8.52 8.52 0 0 1-5.33 1.88 8.91 8.91 0 0 1-1-.07 12 12 0 0 0 6.61 2c7.91 0 12.22-6.7 12.23-12.52l.4-.92A8.81 8.81 0 0 0 22.63 5.33Z"></path></g></defs><g fill="#959595"><path d="M22.63 5.33a8.51 8.51 0 0 1-2.47.7 4.4 4.4 0 0 0 1.9-2.45 8.53 8.53 0 0 1-2.74 1.08 4.21 4.21 0 0 0-6.07-.2 4.45 4.45 0 0 0-1.36 3.21 4.88 4.88 0 0 0 .11 1A12.1 12.1 0 0 1 3.13 4.09 4.49 4.49 0 0 0 4.45 10 4.21 4.21 0 0 1 2.5 9.42v.05A4.4 4.4 0 0 0 6 13.8 4.24 4.24 0 0 1 4 13.87a4.33 4.33 0 0 0 4 3.07 8.52 8.52 0 0 1-5.33 1.88 8.91 8.91 0 0 1-1-.07 12 12 0 0 0 6.61 2c7.91 0 12.22-6.7 12.23-12.52l.4-.92A8.81 8.81 0 0 0 22.63 5.33Z"></path></g></svg></a>
          <a href="#" class="flex justify-center gap-3 px-4 py-2 hover:bg-gray-700">اینستاگرام<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><defs><g id="ui-icon-instagram" viewBox="0 0 24 24"><path d="M22.44 7.68A7.69 7.69 0 0 0 22 5.13a5.32 5.32 0 0 0-3.08-3.08 7.59 7.59 0 0 0-2.54-.49C15.22 1.51 14.86 1.5 12 1.5l0 0c-2.84 0-3.2 0-4.31.06a7.87 7.87 0 0 0-2.54.51A5.32 5.32 0 0 0 2.05 5.17a7.69 7.69 0 0 0-.49 2.55C1.51 8.84 1.5 9.19 1.5 12s0 3.2.06 4.32a8 8 0 0 0 .53 2.51A5.32 5.32 0 0 0 5.17 22a7.84 7.84 0 0 0 2.54.49c1.11 0 1.47.06 4.31.06s3.2 0 4.31-.06A7.84 7.84 0 0 0 18.87 22 5.32 5.32 0 0 0 22 18.87a7.69 7.69 0 0 0 .49-2.55c0-1.12.06-1.48.06-4.32S22.5 8.8 22.44 7.68ZM20.5 16.24a5.9 5.9 0 0 1-.36 2 3.49 3.49 0 0 1-2 2 5.38 5.38 0 0 1-1.94.36c-1.1.06-1.43.07-4.23.07s-3.13 0-4.23-.07a5.38 5.38 0 0 1-1.94-.36 3.49 3.49 0 0 1-2-2 5.6 5.6 0 0 1-.36-1.94c-.08-1.11-.08-1.44-.08-4.24s0-3.13.06-4.24a5.63 5.63 0 0 1 .38-1.94 3.48 3.48 0 0 1 2-2 5.85 5.85 0 0 1 1.94-.36c1.1-.08 1.44-.08 4.23-.08s3.13 0 4.23.06a5.85 5.85 0 0 1 1.94.36 3.54 3.54 0 0 1 2 2 5.86 5.86 0 0 1 .36 1.95c.05 1.1.06 1.44.06 4.23S20.56 15.14 20.5 16.24Z"></path><path d="M12 6.64A5.36 5.36 0 1 0 17.34 12 5.35 5.35 0 0 0 12 6.64Zm0 8.83A3.48 3.48 0 1 1 15.46 12 3.47 3.47 0 0 1 12 15.47Z"></path><path d="M17.46 4.86a1.26 1.26 0 1 0 1.26 1.26A1.25 1.25 0 0 0 17.46 4.86Z"></path></g></defs><g fill="#959595"><path d="M22.44 7.68A7.69 7.69 0 0 0 22 5.13a5.32 5.32 0 0 0-3.08-3.08 7.59 7.59 0 0 0-2.54-.49C15.22 1.51 14.86 1.5 12 1.5l0 0c-2.84 0-3.2 0-4.31.06a7.87 7.87 0 0 0-2.54.51A5.32 5.32 0 0 0 2.05 5.17a7.69 7.69 0 0 0-.49 2.55C1.51 8.84 1.5 9.19 1.5 12s0 3.2.06 4.32a8 8 0 0 0 .53 2.51A5.32 5.32 0 0 0 5.17 22a7.84 7.84 0 0 0 2.54.49c1.11 0 1.47.06 4.31.06s3.2 0 4.31-.06A7.84 7.84 0 0 0 18.87 22 5.32 5.32 0 0 0 22 18.87a7.69 7.69 0 0 0 .49-2.55c0-1.12.06-1.48.06-4.32S22.5 8.8 22.44 7.68ZM20.5 16.24a5.9 5.9 0 0 1-.36 2 3.49 3.49 0 0 1-2 2 5.38 5.38 0 0 1-1.94.36c-1.1.06-1.43.07-4.23.07s-3.13 0-4.23-.07a5.38 5.38 0 0 1-1.94-.36 3.49 3.49 0 0 1-2-2 5.6 5.6 0 0 1-.36-1.94c-.08-1.11-.08-1.44-.08-4.24s0-3.13.06-4.24a5.63 5.63 0 0 1 .38-1.94 3.48 3.48 0 0 1 2-2 5.85 5.85 0 0 1 1.94-.36c1.1-.08 1.44-.08 4.23-.08s3.13 0 4.23.06a5.85 5.85 0 0 1 1.94.36 3.54 3.54 0 0 1 2 2 5.86 5.86 0 0 1 .36 1.95c.05 1.1.06 1.44.06 4.23S20.56 15.14 20.5 16.24Z"></path><path d="M12 6.64A5.36 5.36 0 1 0 17.34 12 5.35 5.35 0 0 0 12 6.64Zm0 8.83A3.48 3.48 0 1 1 15.46 12 3.47 3.47 0 0 1 12 15.47Z"></path><path d="M17.46 4.86a1.26 1.26 0 1 0 1.26 1.26A1.25 1.25 0 0 0 17.46 4.86Z"></path></g></svg></a>
          <a href="#" class="flex justify-center gap-3 px-4 py-2 hover:bg-gray-700">تلگرام<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><defs><g id="ui-icon-telegram" viewBox="0 0 24 24"><path d="M2.48 11 21.1 3.78C22 3.47 22.72 4 22.44 5.3h0L19.27 20.24c-.23 1.06-.86 1.32-1.74.82L12.7 17.5l-2.33 2.24a1.23 1.23 0 0 1-1 .48l.35-4.92 9-8.08c.39-.34-.09-.54-.6-.2L7 14 2.26 12.5c-1-.33-1.06-1 .22-1.53Z"></path></g></defs><g fill="#959595"><path d="M2.48 11 21.1 3.78C22 3.47 22.72 4 22.44 5.3h0L19.27 20.24c-.23 1.06-.86 1.32-1.74.82L12.7 17.5l-2.33 2.24a1.23 1.23 0 0 1-1 .48l.35-4.92 9-8.08c.39-.34-.09-.54-.6-.2L7 14 2.26 12.5c-1-.33-1.06-1 .22-1.53Z"></path></g></svg></a>
        </div>
      </div>

      <!-- Grouped links on the right -->
      <div class="flex space-x-4 items-center">
        <a href="#" class="hover:underline">اپلیکیشن‌ها</a>
        <a href="#" class="hover:underline">تماس و پشتیبانی</a>
        <a href="#" class="hover:underline">فروشگاه</a>

        <!-- Other Links (سایر لینک‌ها) with submenu -->
        <div class="relative group">
          <a href="#" class="flex flex-row-reverse items-center hover:underline">
            <svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <g fill="#959595">
                <path d="M12 17a1 1 0 0 1-.77-.36l-5-6A1 1 0 0 1 7 9H17a1 1 0 0 1 .77 1.64l-5 6A1 1 0 0 1 12 17Z"></path>
              </g>
            </svg>
            سایر لینک‌ها
          </a>
          <div class="absolute left-0 bottom-full mb-2 bg-gray-800 py-2 w-48 hidden group-hover:block z-50">
            <a href="#" class="block px-4 py-2 text-sm hover:bg-gray-700">Link 1</a>
            <a href="#" class="block px-4 py-2 text-sm hover:bg-gray-700">Link 2</a>
          </div>
        </div>

        <!-- Watch with TV (تماشا با تلویزیون) -->
        <div class="relative group">
          <a href="#" class="hover:underline">تماشا با تلویزیون</a>
        </div>
      </div>
      
    </div>
  </footer>
`;

document.body.insertAdjacentHTML("beforeend", footer);


