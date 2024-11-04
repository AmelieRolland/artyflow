import Image from 'next/image';

export default function Hero() {
    return (
        <>
            
            <section className="overflow-x-clip bg-light-pink w-full h-full">
                <div className="flex flex-col lg:flex-col mx-auto max-w-screen-xl lg:py-20 px-4 sm:px-6 lg:px-8 pt-16">
                    <svg className='absolute top-[180px] lg:top-[120px] right-[0px] -z-5 w-72 sm:w-72 md:w-96 lg:w-[560px]' xmlns="http://www.w3.org/2000/svg"  zoomAndPan="magnify" viewBox="0 0 375 449.999984"  preserveAspectRatio="xMidYMid meet" version="1.0"><defs>
                    <clipPath id="639bea3c77"><path d="M 59 9 L 375 9 L 375 450 L 59 450 Z M 59 9 " clip-rule="nonzero"/></clipPath><clipPath id="70c8affa89"><path d="M 91.242188 489.191406 L 31.503906 22.753906 L 409.417969 -25.644531 L 469.15625 440.792969 Z M 91.242188 489.191406 " clip-rule="nonzero"/></clipPath><clipPath id="4be56194a0"><path d="M 91.242188 489.191406 L 31.503906 22.753906 L 409.417969 -25.644531 L 469.15625 440.792969 Z M 91.242188 489.191406 " clip-rule="nonzero"/></clipPath></defs><g clip-path="url(#639bea3c77)"><g clip-path="url(#70c8affa89)"><g clip-path="url(#4be56194a0)"><path fill="#663030" d="M 443.847656 412.671875 C 436.050781 413.453125 424.363281 426.023438 418.914062 427.574219 C 408.527344 430.523438 398.625 431.421875 391.378906 438.925781 C 393.933594 437.730469 396.449219 436.347656 398.933594 435.558594 C 405.132812 433.542969 411.636719 432.183594 417.914062 430.4375 C 428.738281 427.460938 436.703125 420.957031 443.847656 412.671875 Z M 335.453125 288.628906 C 324.34375 290.082031 307.121094 289.640625 300.574219 299.964844 C 296.644531 306.246094 288.867188 324.523438 301.660156 324.972656 C 313.949219 325.371094 329.679688 327.609375 335.613281 313.773438 C 339.167969 305.476562 338.789062 296.878906 335.453125 288.628906 Z M 92.589844 298.539062 C 83.398438 309.332031 94.492188 326.019531 102.410156 334.210938 C 111.039062 343.121094 121.304688 348.761719 132.96875 352.769531 C 144.226562 356.625 156.066406 360.636719 167.859375 362.582031 C 180.785156 364.75 191.558594 360.429688 203.003906 355.65625 C 199.484375 352.855469 196.265625 349.648438 193.199219 346.367188 C 190.296875 343.238281 187.269531 340.035156 184.375 336.730469 C 163.5 332.5625 142.886719 325.160156 122.226562 319.65625 C 106.917969 315.558594 101.085938 309.289062 92.589844 298.539062 Z M 361.652344 273.859375 C 361.617188 273.820312 361.582031 273.765625 361.542969 273.710938 C 355.367188 279.5625 349.316406 285.734375 341.121094 287.753906 C 345.183594 298.808594 345.238281 313.128906 336.785156 322.136719 C 332.03125 327.144531 326.203125 330.921875 319.058594 330.925781 C 314.632812 330.933594 308.714844 331.601562 303.355469 331.199219 C 310.671875 338.835938 317.453125 347.117188 324.917969 354.527344 C 332.824219 362.398438 339.015625 371.226562 344.40625 380.933594 C 356 401.757812 373.804688 417.214844 384.675781 438.253906 C 385.917969 436.476562 387.265625 434.804688 388.792969 433.300781 C 384.738281 429.449219 382.207031 425.054688 379.9375 421.226562 C 377.261719 416.640625 375.128906 412.414062 372.929688 408.902344 C 370.808594 405.320312 368.503906 402.597656 366.261719 400.003906 C 364.09375 397.441406 362.21875 395.199219 360.585938 393.246094 C 354.128906 385.425781 351.957031 382.144531 352.433594 381.714844 C 352.90625 381.269531 355.914062 383.738281 363.027344 391.0625 C 364.792969 392.898438 366.84375 395.03125 369.1875 397.480469 C 370.320312 398.734375 371.59375 399.953125 372.820312 401.503906 C 374.050781 403.066406 375.425781 404.726562 376.53125 406.585938 C 379.003906 410.269531 381.191406 414.476562 383.847656 418.917969 C 386.179688 422.765625 388.816406 426.957031 392.449219 430.273438 C 393.628906 429.503906 394.859375 428.773438 396.214844 428.199219 C 404.742188 424.636719 414.996094 424.546875 422.582031 419.101562 C 422.09375 418.519531 421.570312 417.863281 421.09375 417.265625 C 420.144531 415.707031 419.199219 414.167969 418.289062 412.695312 C 416.570312 409.738281 414.992188 406.941406 413.316406 404.539062 C 409.917969 399.472656 406.257812 395.234375 403.554688 390.890625 C 397.742188 382.367188 394.136719 375.460938 391.132812 370.273438 C 385.613281 359.550781 383.945312 355.265625 384.527344 354.96875 C 385.078125 354.679688 387.773438 358.390625 393.945312 368.585938 C 397.300781 373.527344 401.304688 380.441406 407.03125 388.414062 C 409.753906 392.566406 413.507812 396.734375 417.070312 401.925781 C 420.320312 406.40625 422.703125 411.792969 426.261719 416.394531 C 428.851562 414.433594 432.042969 412.15625 435.402344 410.355469 C 432.550781 405.78125 429.832031 401.421875 427.25 397.339844 C 424.460938 392.683594 421.84375 388.328125 419.394531 384.242188 L 419.324219 384.132812 L 419.277344 384.109375 C 416.503906 379.246094 412.957031 375.183594 409.710938 371.320312 C 408.167969 369.265625 406.511719 367.480469 405.355469 365.347656 C 404.769531 364.332031 404.140625 363.324219 403.578125 362.367188 C 403.011719 361.382812 402.636719 360.402344 402.175781 359.460938 C 400.457031 355.5625 398.820312 352.550781 397.417969 349.640625 C 395.832031 346.785156 394.488281 344.339844 393.335938 342.105469 C 392.183594 339.882812 391.222656 338.007812 390.460938 336.429688 C 389.804688 334.761719 389.292969 333.386719 388.910156 332.347656 C 388.164062 330.222656 387.96875 329.246094 388.246094 329.121094 C 388.484375 329.035156 389.144531 329.816406 390.28125 331.699219 C 390.875 332.652344 391.585938 333.84375 392.414062 335.367188 C 393.351562 336.835938 394.472656 338.589844 395.796875 340.671875 C 397.097656 342.785156 398.628906 345.207031 400.363281 347.957031 C 401.9375 350.8125 403.925781 354.175781 405.632812 357.738281 C 406.097656 358.605469 406.5 359.582031 407.039062 360.453125 C 407.59375 361.324219 408.175781 362.222656 408.761719 363.101562 C 409.78125 364.972656 411.472656 366.695312 412.949219 368.59375 C 416.179688 372.328125 420.015625 376.457031 423.25 381.96875 L 423.148438 381.835938 C 425.667969 385.910156 428.351562 390.316406 431.226562 394.964844 C 433.882812 399.183594 436.707031 403.660156 439.648438 408.371094 C 440.605469 408.027344 441.566406 407.714844 442.484375 407.539062 C 437.402344 395.980469 432.96875 383.753906 424.320312 374.464844 C 415.5625 365.113281 408.054688 354.707031 402.195312 343.292969 C 389.789062 319.246094 374.804688 297.324219 361.652344 273.859375 Z M 174.917969 205.351562 C 162.144531 203.34375 150.078125 204.445312 153.472656 221.644531 C 155.414062 231.414062 158.101562 241.023438 160.203125 250.773438 C 164.285156 270 164.964844 289.210938 175.414062 306.257812 C 176.625 305.96875 178.246094 306.230469 180.378906 307.238281 C 211.617188 296.441406 241.882812 311.9375 273.328125 306.320312 C 279.28125 305.25 286.027344 302.828125 291.652344 305.605469 C 292.636719 303.203125 293.683594 300.933594 294.660156 299.03125 C 294.730469 298.875 294.828125 298.730469 294.914062 298.601562 C 272.773438 285.332031 277.214844 259.597656 281.121094 236.699219 C 263.507812 226.1875 244.199219 224.601562 224.738281 219.285156 C 208.214844 214.753906 191.898438 208.046875 174.917969 205.351562 Z M 86.371094 202.867188 C 79.367188 205.265625 72.785156 209.917969 69.804688 216.625 C 66.8125 230.800781 74.808594 246.164062 80.464844 258.867188 C 85.035156 269.046875 88.003906 281.210938 95.765625 289.453125 C 96.671875 290.441406 97 291.488281 96.933594 292.464844 C 103.5 300.113281 109.734375 308.359375 119.355469 311.597656 C 120.398438 311.921875 120.859375 312.65625 121 313.417969 C 126.023438 314.863281 131.078125 316.082031 136.082031 317.601562 C 149.859375 321.824219 164.632812 326.582031 178.9375 329.867188 C 176.960938 327.089844 175.175781 324.171875 173.824219 321.066406 C 172.625 318.378906 171.789062 314.484375 172.082031 311.359375 C 158.871094 291.359375 157.851562 267.308594 152.882812 244.386719 C 152.789062 244.324219 152.6875 244.335938 152.589844 244.261719 C 145.007812 238.921875 137.320312 232.757812 128.578125 229.511719 C 121.753906 226.957031 115.128906 224.496094 108.699219 221.039062 C 106.691406 219.960938 104.285156 217.574219 101.734375 214.886719 C 101.375 214.714844 101.015625 214.4375 100.6875 214.050781 C 100.28125 213.53125 99.90625 213.019531 99.484375 212.484375 C 95.167969 207.949219 90.550781 203.363281 86.371094 202.867188 Z M 320.300781 174.46875 C 312.441406 170.636719 296.449219 163.109375 293.300781 181.265625 C 292.367188 186.589844 291.578125 191.914062 291.121094 197.308594 C 290.667969 202.382812 290.363281 207.480469 289.917969 212.597656 C 290.058594 213.140625 290.023438 213.671875 289.800781 214.113281 C 289.480469 217.464844 289.164062 220.84375 288.664062 224.1875 C 288.230469 227.226562 287.628906 230.554688 286.980469 234.007812 C 287.816406 235.121094 287.332031 236.519531 286.355469 237.394531 C 282.515625 258.050781 278.558594 282.957031 297.878906 293.941406 C 297.972656 293.988281 298.015625 294.085938 298.121094 294.128906 C 307.164062 284.574219 323.820312 284.75 335.886719 282.953125 C 336.003906 282.941406 336.113281 282.984375 336.226562 282.96875 C 336.386719 282.949219 336.496094 282.878906 336.652344 282.855469 C 346.425781 282.105469 353.125 274.230469 360.097656 267.589844 C 366.863281 257.925781 376 248.195312 376.984375 235.90625 C 377.832031 225.429688 380.578125 204.019531 369.867188 196.859375 C 361.960938 191.636719 352.953125 189.847656 344.375 186.152344 C 336.140625 182.617188 328.359375 178.363281 320.300781 174.46875 Z M 420.085938 168.675781 C 416.4375 163.964844 411.640625 159.933594 405.96875 163.1875 C 400.089844 166.53125 398.6875 175.5625 396.699219 181.40625 C 393.023438 191.996094 388.988281 202.160156 382.722656 211.480469 C 384.078125 219.867188 383.796875 228.917969 382.480469 236.6875 C 381.078125 245.121094 377.511719 251.972656 373.15625 258.621094 C 373.382812 258.652344 373.601562 258.652344 373.816406 258.710938 C 395.011719 264.25 413.253906 230.761719 419.429688 214.648438 C 422.726562 206.078125 426.523438 195.972656 425.289062 186.585938 C 424.449219 180.234375 421.746094 174.742188 420.085938 168.675781 Z M 132.828125 120.382812 C 128.339844 117.058594 117.558594 104.304688 112.085938 117.832031 C 109.679688 123.847656 108.304688 129.992188 106.679688 136.246094 C 99.765625 162.765625 104.207031 187.230469 107.828125 213.785156 C 115.78125 219.605469 125.660156 221.398438 134.539062 226.101562 C 140.25 229.105469 145.644531 232.632812 150.921875 236.296875 C 147.234375 222.664062 141.296875 204.101562 158.4375 199.199219 C 159.214844 198.964844 160.007812 198.835938 160.796875 198.675781 C 158.996094 178.523438 156.445312 158.15625 159.992188 138.066406 C 160.519531 135.070312 160.503906 132.074219 160.28125 129.074219 C 151.253906 126.359375 140.613281 126.164062 132.828125 120.382812 Z M 107.996094 114.148438 C 106.605469 112.605469 105.167969 111.128906 103.769531 109.628906 C 87.746094 116.109375 89.898438 136.585938 90.183594 151.007812 C 90.464844 165.941406 91.96875 180.546875 95.234375 195.144531 C 95.304688 195.472656 95.351562 195.820312 95.359375 196.128906 C 97.019531 199.3125 98.941406 202.375 101.0625 205.296875 C 96.839844 174.714844 93.144531 142.421875 107.996094 114.148438 Z M 222.441406 111.214844 C 210.644531 107.078125 183.476562 86.714844 171.648438 97.9375 C 160.269531 108.761719 166.4375 116.269531 166.359375 128.542969 C 166.320312 135.359375 164.574219 141.699219 164.136719 148.492188 C 163.109375 165.066406 164.875 181.476562 166.328125 197.996094 C 185.390625 197.203125 208.902344 209.679688 225.527344 213.753906 C 245.210938 218.605469 264.398438 220.984375 282.074219 230.824219 C 282.46875 228.273438 282.871094 225.796875 283.152344 223.394531 C 283.480469 220.570312 283.628906 216.800781 283.726562 212.507812 C 272.390625 191.738281 268.117188 166.636719 266.433594 143.261719 C 265.890625 135.578125 266.785156 127.167969 266.910156 118.976562 C 266.640625 118.820312 266.367188 118.632812 266.160156 118.410156 C 251.789062 115.382812 236.136719 116.050781 222.441406 111.214844 Z M 309.578125 79.464844 C 299.148438 75.328125 288.535156 78.46875 278.542969 82.554688 C 264.566406 88.257812 272.328125 97.191406 272.597656 106.539062 C 272.652344 109.726562 272.660156 112.871094 272.648438 115.992188 C 272.703125 116.425781 272.699219 116.867188 272.621094 117.273438 C 272.476562 130.96875 271.75 144.359375 273.859375 158.3125 C 276.019531 172.769531 278.714844 187.03125 284.183594 200.433594 C 285.285156 181.042969 289.210938 159.535156 309.292969 164.523438 C 325.378906 168.507812 339.171875 178.949219 354.972656 184.160156 C 363.3125 186.933594 374.984375 190.304688 379.082031 199.121094 C 379.203125 199.382812 379.3125 199.648438 379.40625 199.917969 C 383.078125 183.34375 380.664062 165.988281 376.679688 149.703125 C 373.097656 134.804688 370.421875 114.957031 357.179688 105.605469 C 342.632812 95.394531 326.140625 86.050781 309.578125 79.464844 Z M 364.523438 57.660156 C 364.140625 57.652344 363.828125 57.617188 363.511719 57.539062 C 354.191406 68.851562 364.273438 92.800781 367.957031 103.285156 C 372.328125 115.710938 377.75 128.09375 380.296875 141.0625 C 383.558594 157.601562 387.597656 176.734375 385.804688 194.316406 C 387.988281 189.421875 389.796875 184.351562 391.550781 179.226562 C 393.953125 172.152344 395.433594 164.757812 401.140625 159.585938 C 407.421875 153.855469 413.929688 156.082031 419.339844 160.5625 C 419.296875 139.097656 414.027344 118.152344 404.355469 98.902344 C 396.410156 83.140625 385.847656 57.738281 364.523438 57.660156 Z M 204.445312 60.160156 C 192.121094 56.957031 177.585938 49.804688 165.800781 59.636719 C 151.234375 71.871094 159.046875 83.609375 160.894531 98.253906 C 161.035156 99.355469 161.148438 100.472656 161.289062 101.574219 C 162.257812 99.726562 163.605469 97.96875 165.398438 96.238281 C 176.925781 85.273438 190.425781 89.753906 203.316406 96.351562 C 214.960938 102.289062 225.617188 106.96875 238.832031 108.496094 C 246.773438 109.40625 254.628906 110.34375 262.441406 111.871094 C 256.339844 100.296875 250.570312 88.886719 243.253906 77.808594 C 240.625 73.808594 237.761719 69.9375 234.949219 66.019531 C 234.921875 66.023438 234.921875 66.023438 234.921875 66.023438 C 225.101562 61.824219 214.621094 62.785156 204.445312 60.160156 Z M 143.023438 56.6875 C 133.949219 58.289062 125.230469 62.554688 122.136719 71.820312 C 118.257812 83.464844 112.5625 93.988281 108.085938 105.328125 C 107.980469 105.53125 107.894531 105.660156 107.800781 105.835938 C 108.859375 106.980469 109.898438 108.09375 110.984375 109.234375 C 114.5 105.226562 120.132812 103.59375 124.902344 106.984375 C 132.042969 112.082031 136.933594 118.121094 146.199219 120.050781 C 150.214844 120.875 154.15625 121.679688 158.050781 122.679688 C 157.011719 114.796875 156.894531 106.753906 155.367188 98.964844 C 153.847656 91.230469 150.78125 84.195312 150.183594 76.316406 C 150.003906 73.984375 150.410156 71.757812 151.136719 69.605469 C 150.933594 69.292969 150.796875 68.925781 150.71875 68.539062 C 149.976562 64.003906 146.503906 59.519531 143.023438 56.6875 Z M 188.011719 46.335938 C 176.351562 41.535156 157.859375 42.875 150.484375 54.304688 C 150.226562 54.703125 149.925781 54.992188 149.640625 55.28125 C 151.707031 57.546875 153.546875 60.175781 154.789062 62.988281 C 157.929688 58.808594 162.222656 55.359375 166.136719 52.945312 C 173.949219 48.167969 183.621094 48.5625 192.277344 50.6875 C 191.085938 49.441406 190.019531 48.109375 189.050781 46.644531 C 188.734375 46.566406 188.371094 46.480469 188.011719 46.335938 Z M 358.117188 55.613281 C 347.144531 44.253906 301.816406 1.523438 286.945312 27.238281 C 294.25 30.523438 300.820312 34.300781 307.136719 40.417969 C 315.117188 48.191406 322.167969 55.9375 331.152344 62.683594 C 341.300781 70.28125 350.160156 78.605469 357.261719 88.460938 C 354.046875 77.019531 352.308594 64.371094 358.117188 55.613281 Z M 226.777344 34.355469 C 216.519531 33.289062 197.53125 32.925781 195.769531 41.105469 C 196.6875 45.167969 199.8125 49.015625 202.789062 51.8125 C 203.867188 52.425781 204.972656 53.003906 206.101562 53.550781 C 206.535156 53.730469 206.882812 54.039062 207.113281 54.347656 C 214.605469 55.667969 222.234375 56.441406 229.46875 58.351562 C 228.003906 56.230469 226.582031 54.074219 225.242188 51.878906 C 219.714844 42.847656 222.074219 38.414062 226.777344 34.355469 Z M 253.210938 26.351562 C 247.40625 26.847656 243.386719 27.609375 240.011719 29.765625 C 237.113281 31.589844 234.667969 34.433594 232.015625 38.964844 C 228.5625 44.730469 229.960938 49.804688 233.96875 55.027344 C 237.726562 59.914062 241.761719 64.648438 245.074219 69.839844 C 252.996094 82.210938 259.5625 94.664062 266.34375 107.414062 C 265.929688 104.4375 265.234375 101.527344 264.136719 98.800781 C 261.984375 93.382812 260.902344 89.285156 264.75 84.292969 C 271.765625 75.21875 296.34375 68.230469 307.277344 72.550781 C 325.144531 79.648438 342.410156 89.277344 358.210938 100.445312 C 348.75 83.902344 334.789062 74.574219 320.046875 61.546875 C 313.046875 55.355469 307.488281 47.550781 300.382812 41.5625 C 293.632812 35.941406 287.652344 34.707031 279.652344 32.320312 C 270.828125 29.683594 262.679688 25.539062 253.210938 26.351562 Z M 230.585938 25.410156 C 234.488281 19.574219 243.503906 17.859375 249.992188 17.308594 C 260.335938 16.410156 269.554688 18.699219 279.058594 22.261719 C 297.945312 -10.777344 346.867188 31.183594 364.042969 48.484375 C 386.632812 48.960938 399.15625 68.519531 408.65625 86.910156 C 421.402344 111.675781 429.179688 136.800781 428.535156 164.726562 C 428.640625 164.960938 428.726562 165.171875 428.757812 165.417969 C 431.542969 177.855469 436.5 186.589844 433.597656 199.757812 C 430.878906 211.960938 426.316406 223.191406 420.1875 234.023438 C 411.515625 249.339844 395.128906 271.589844 374.933594 268.351562 C 373.859375 269.738281 372.6875 271.035156 371.363281 272.175781 C 377.855469 283.359375 385.394531 293.777344 392.117188 304.816406 C 399.023438 316.136719 404.339844 328.121094 410.75 339.699219 C 418.351562 353.476562 430.125 363.734375 437.945312 377.027344 C 444.167969 387.601562 448.464844 399.007812 453.800781 410.015625 C 454.398438 411.21875 454.394531 412.351562 454.046875 413.292969 C 454.097656 414.257812 453.796875 415.265625 453.011719 416.234375 C 444.234375 426.949219 434.976562 435.28125 421.5 439.039062 C 414.457031 441 404.605469 442.289062 398.121094 445.515625 C 393.496094 447.859375 389.929688 450.347656 384.664062 450.550781 C 383.167969 450.59375 381.9375 450.0625 381.078125 449.199219 C 380.042969 448.832031 379.0625 448.0625 378.496094 446.722656 C 368.632812 424.613281 349.949219 409.875 338.3125 388.949219 C 330.824219 375.496094 322.59375 365.09375 311.539062 354.332031 C 304.609375 347.539062 298.921875 339.648438 291.949219 332.96875 C 275.816406 359.625 238.980469 374.609375 210.023438 362.800781 C 190.804688 370.628906 177.0625 374.613281 156.363281 369.277344 C 140.742188 365.246094 123.394531 361.394531 109.777344 352.328125 C 92.042969 340.523438 68.453125 311.835938 85.933594 292.125 C 77.503906 281.335938 72.820312 265.773438 68.035156 253.429688 C 63.578125 242.054688 58.351562 229.519531 60.253906 217.140625 C 60.132812 216.4375 60.171875 215.710938 60.441406 214.925781 C 63.992188 203.851562 74.664062 196.777344 85.449219 193.5 C 81.125 173.167969 79.046875 151.082031 81.296875 130.421875 C 82.820312 116.242188 86.589844 106.402344 99.746094 101.1875 C 103.019531 93.09375 107.535156 85.511719 110.480469 77.28125 C 112.402344 71.84375 113.480469 64.867188 117.394531 60.410156 C 124.257812 52.546875 134.035156 48.410156 144.226562 47.132812 C 153.546875 34.808594 172.929688 32.164062 187.457031 36.363281 C 192.867188 23.152344 217.878906 23.671875 230.585938 25.410156 Z M 182.632812 325.304688 C 185.335938 329.078125 188.273438 332.597656 191.378906 336.082031 C 196.453125 341.800781 201.730469 347.980469 208.054688 352.480469 C 208.847656 352.347656 209.699219 352.460938 210.667969 352.894531 C 236.949219 365.632812 273.917969 350.324219 286.347656 323.816406 C 286.746094 323.015625 287.261719 322.449219 287.824219 322.011719 C 288.351562 315.574219 287.933594 309.199219 281.628906 310.375 C 273.617188 311.902344 265.636719 312.996094 257.4375 312.578125 C 231.867188 311.261719 206.667969 303.621094 181.644531 312.664062 C 180.957031 312.914062 180.34375 312.832031 179.789062 312.652344 C 179.328125 312.710938 178.839844 312.6875 178.304688 312.417969 C 175.039062 310.789062 182.59375 324.558594 182.695312 325.328125 L 182.632812 325.304688 " fill-opacity="1" fill-rule="nonzero"/></g></g></g>
                    </svg>


                    <h2 className="oleo-script-regular text-white text-5xl text-left mb-8 lg:mb-0">A la une</h2>


                    <div className="flex flex-col md:flex-row-reverse justify-between w-full h-auto content-center items-center">
                        <div className="md:w-1/2 mb-8 md:mb-0">
                            <div className="mx-auto relative z-40 h-full bg-gray-200 lg:w-full md:w-full w-3/4 mb-8 md:mb-0">
                                <Image
                                    width={800}
                                    height={600}
                                    className="object-cover w-full h-full"
                                    src="/ouquetusois.png"
                                    alt="oeuvre à la une"
                                />
                            </div>
                        </div>
                        <div className="md:w-1/2 md:pe-8 h-full">
                            <h3 className="pb-5"><strong>Nom de l'artiste</strong></h3>

                            <p className="pb-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda animi officiis nesciunt neque aliquam, eum minus nostrum ipsam ratione, consectetur voluptate nobis optio quae porro laboriosam veniam cumque quis deserunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda animi officiis nesciunt neque aliquam, eum minus nostrum ipsam ratione, consectetur voluptate nobis optio quae porro laboriosam veniam cumque quis deserunt.</p>
                            <div className="py-8">
                                <a className="leading-none bg-dark-pink  pt-2 pb-3 px-6 rounded-full text-white" href="">Je découvre</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
