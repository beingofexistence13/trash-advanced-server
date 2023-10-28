$('.slider-items-4').slick({
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [{
            breakpoint: 1600,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

$('.slider-items-3').slick({
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [{
            breakpoint: 1600,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            }
        },
        {
            breakpoint: 960,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});



// For Angular TS File Start

// declare var $: any;

// getData(id: number, lang: string) {
//     this._schemeService
//       .GetSchemeManagementDetailsByID(id, lang)
//       .subscribe((result: ApiResponseModel) => {

//         if (result.ResponseCode == 200) {
//           this.schemeDetails = result.Data;
//           setTimeout(() => {
//             this.AddSlider();
//           }, 50);
//         }
//       });
//   }

//   AddSlider() {
//     $('.slider-items-3').slick({
//       arrows: true,
//       dots: false,
//       infinite: true,
//       speed: 2000,
//       slidesToShow: 3,
//       slidesToScroll: 3,
//       autoplay: true,
//       autoplaySpeed: 2000,
//       responsive: [{
//               breakpoint: 1600,
//               settings: {
//                   slidesToShow: 3,
//                   slidesToScroll: 3,
//               }
//           },
//           {
//               breakpoint: 1200,
//               settings: {
//                   slidesToShow: 2,
//                   slidesToScroll: 2
//               }
//           },
//           {
//               breakpoint: 600,
//               settings: {
//                   slidesToShow: 1,
//                   slidesToScroll: 1
//               }
//           },
//           {
//               breakpoint: 480,
//               settings: {
//                   slidesToShow: 1,
//                   slidesToScroll: 1
//               }
//           }
//       ]
//   });

//   }

// For Angular TS File End