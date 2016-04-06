namespace ComicBookStore.Controllers {

    export class HomeController {
        public comics; /*= [
            {
                imageUrl: " http://covers.cbrd.info/7f628a8eb4e3f0c16b03be3bad0ef1fa_xl.jpg ",
                title: "Superman",
                price: 4.99

            },
            {
                imageUrl: " http://static5.comicvine.com/uploads/scale_small/6/67663/1946579-01.jpg ",
                title: "Batman",
                price: 4.99

            },
            {
                imageUrl: " http://getcomics.info/share/uploads/2015/04/Deadpool-The-Gauntlet-Infinite-Comic-1-13_.jpg ",
                title: "Deadpool",
                price: 4.99

            },
            {
                imageUrl: " http://images.gmanews.tv/v3/webpics/v3/2014/05/2014_05_19_17_32_32.jpg ",
                title: "Spiderman",
                price: 4.99

            },
            {
                imageUrl: "http://www.newkadia.com/Covers/L/W/Wolverine%20The%20Best%20There%20Is/wolverinethebestthereis1.jpg ",
                title: "Wolverine",
                price: 4.99

            }];*/

        constructor(private $http: ng.IHttpService) {
            this.$http.get("/api/comics/featured")
                .then((response) => {
                    this.comics = response.data
                })
                .catch((response) => {
                alert("")
                })
        }

        public start: number = 0;

        public moveLeft() {
            if (this.start > 0) {
                this.start--;
            }
        }

        public moveRight() {
            if (this.start < this.comics.length - 4) {
                this.start++;
            }
        }



    }
  

}
