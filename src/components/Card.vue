<script>
export default {
    props:['cardLists'],
    methods:{
        close: function(){
            const div = document.querySelector('.card-container')
            div.style.display = 'none'
        }
    }
}
</script>
<template>
<div class="card-container">
    <div class="card-item">
        <ul class="information-show">
            <li class="article-writer">{{cardLists.writer}}</li>
            <div class="dividing">|</div>
            <li>{{cardLists.date.slice(0, 10)}}</li>
            <span class="close" v-if="cardLists.articleAdver==0" @click.stop="close"><svg t="1660116590359" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2673" width="200" height="200"><path d="M556.8 512L832 236.8c12.8-12.8 12.8-32 0-44.8-12.8-12.8-32-12.8-44.8 0L512 467.2l-275.2-277.333333c-12.8-12.8-32-12.8-44.8 0-12.8 12.8-12.8 32 0 44.8l275.2 277.333333-277.333333 275.2c-12.8 12.8-12.8 32 0 44.8 6.4 6.4 14.933333 8.533333 23.466666 8.533333s17.066667-2.133333 23.466667-8.533333L512 556.8 787.2 832c6.4 6.4 14.933333 8.533333 23.466667 8.533333s17.066667-2.133333 23.466666-8.533333c12.8-12.8 12.8-32 0-44.8L556.8 512z" p-id="2674" fill="#86909c"></path></svg></span>
            <span class="show-adver" v-else>广告</span>
        </ul>
        <div class="article-box">
            <div class="box">
                <div class="article-title"><a>{{cardLists.title}}</a></div>
                <div class="article-content">{{cardLists.record}}</div>
                <ul class="article-footer" v-if="cardLists.articleAdver==0">
                    <li class="footer-item">
                        <svg t="1660112144866" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1448" width="200" height="200"><path d="M986.274 512.104c0-5.696-0.963-10.46-1.237-11.027-0.207-2.823-1.17-7.967-2.065-10.667-0.24-0.671-0.55-1.376-0.824-2.048-0.484-1.548-0.998-3.062-1.583-4.265-87.463-191.303-275.77-319.88-468.517-319.88-192.711 0-381.002 128.458-468.068 318.726-1.05 2.065-1.79 4.043-2.254 5.764-0.207 0.567-0.448 1.1-0.636 1.6-1.721 5.041-1.755 8.55-1.617 7.638-0.808 3.699-1.549 11.062-1.549 11.062-0.206 2.218-0.206 3.99 0.035 6.192 0 0 0.74 6.434 1.101 7.74 0.103 1.824 0.55 4.474 1.083 6.883h-0.035a31.658 31.658 0 0 0 1.978 6.02 35.675 35.675 0 0 0 1.446 3.992c87.582 191.335 275.84 319.947 468.516 319.947 192.782 0 381.09-128.507 467.554-317.814a34.207 34.207 0 0 0 2.787-6.848c0.274-0.618 0.517-1.169 0.688-1.72 1.514-4.405 1.823-8.223 1.686-8.223l-0.033 0.034c0.617-3.06 1.544-7.635 1.544-13.106z m-63.857 2.339c-0.034 0.138-0.104 0.31-0.172 0.448-0.103 0.412-0.274 0.894-0.379 1.376C844.038 684 679.713 796.544 512.048 796.544c-167.25 0-331.285-112.233-409.887-280.552-0.19-0.584-0.328-1.136-0.534-1.686-0.035-0.55-0.137-0.997-0.17-1.308a19.332 19.332 0 0 1-0.19-1.239v-0.43c0.19-0.705 0.325-1.41 0.395-2.184 0.138-0.412 0.241-0.808 0.396-1.255 77.861-167.82 242.325-280.416 409.99-280.416 167.731 0 332.162 112.7 409.783 280.26 0.069 0.327 0.139 0.603 0.242 0.827 0.07 0.274 0.137 0.55 0.274 0.843 0.172 1.256 0.31 2.495 0.482 3.113-0.206 0.653-0.308 1.273-0.412 1.926z m-410.37-160.525c-87.152 0-158.1 70.912-158.1 158.082 0 87.152 70.948 158.1 158.1 158.1s158.1-70.948 158.1-158.1c0-87.17-70.948-158.082-158.1-158.082z m0 252.942c-52.264 0-94.858-42.561-94.858-94.859 0-52.281 42.594-94.841 94.858-94.841 52.298 0 94.861 42.56 94.861 94.841-0.001 52.298-42.563 94.859-94.86 94.859z" fill="#4e5969" p-id="1449"></path></svg>
                        <span>{{cardLists.viewNums}}</span>
                    </li>
                    <li class="footer-item">
                        <svg t="1660112961645" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2517" width="200" height="200"><path d="M190.193225 471.411583c14.446014 0 26.139334-11.718903 26.139334-26.13831 0-14.44499-11.69332-26.164916-26.139334-26.164916-0.271176 0-0.490164 0.149403-0.73678 0.149403l-62.496379 0.146333c-1.425466-0.195451-2.90005-0.295735-4.373611-0.295735-19.677155 0-35.621289 16.141632-35.621289 36.114522L86.622358 888.550075c0 19.949354 15.96767 35.597753 35.670407 35.597753 1.916653 0 3.808746 0.292666 5.649674 0l61.022819 0.022513c0.099261 0 0.148379 0.048095 0.24764 0.048095 0.097214 0 0.146333-0.048095 0.24457-0.048095l0.73678 0 0-0.148379c13.413498-0.540306 24.174586-11.422144 24.174586-24.960485 0-13.55983-10.760065-24.441669-24.174586-24.981974l0-0.393973-50.949392 0 1.450025-402.275993L190.193225 471.409536z" p-id="2518" fill="#4e5969"></path><path d="M926.52241 433.948343c-19.283182-31.445176-47.339168-44.172035-81.289398-45.546336-1.77032-0.246617-3.536546-0.39295-5.380544-0.39295l-205.447139-0.688685c13.462616-39.059598 22.698978-85.58933 22.698978-129.317251 0-28.349675-3.193739-55.962569-9.041934-82.542948l-0.490164 0.049119c-10.638291-46.578852-51.736315-81.31498-100.966553-81.31498-57.264215 0-95.466282 48.15065-95.466282 106.126063 0 3.241834-0.294712 6.387477 0 9.532097-2.996241 108.386546-91.240027 195.548698-196.23636 207.513194l0 54.881958-0.785899 222.227314 0 229.744521 10.709923 0 500.025271 0.222057 8.746198-0.243547c19.35686 0.049119 30.239721-4.817726 47.803749-16.116049 16.682961-10.761088 29.236881-25.50079 37.490869-42.156122 2.260483-3.341095 4.028757-7.075139 5.106298-11.20111l77.018118-344.324116c1.056052-4.053316 1.348718-8.181333 1.056052-12.160971C943.643346 476.446249 938.781618 453.944769 926.52241 433.948343zM893.82573 486.837924l-82.983993 367.783411-0.099261-0.049119c-2.555196 6.141884-6.879688 11.596106-12.872169 15.427364-4.177136 2.727111-8.773827 4.351098-13.414521 4.964058-1.49812-0.195451-3.046383 0-4.620227 0l-477.028511-0.540306-0.171915-407.408897c89.323375-40.266076 154.841577-79.670527 188.596356-173.661202 0.072655 0.024559 0.124843 0.049119 0.195451 0.072655 2.99931-9.137101 6.313799-20.73423 8.697079-33.164331 5.551436-29.185716 5.258771-58.123792 5.258771-58.123792-4.937452-37.98001 25.940812-52.965306 44.364417-52.965306 25.304316 0.860601 50.263777 33.656541 50.263777 52.326762 0 0 5.600555 27.563776 5.649674 57.190537 0.048095 37.366026-4.6673 56.847729-4.6673 56.847729l-0.466628 0c-5.872754 30.879288-16.214287 60.138682-30.464849 86.964654l0.36839 0.342808c-2.358721 4.815679-3.709485 10.220782-3.709485 15.943111 0 19.922748 19.088754 21.742187 38.765909 21.742187l238.761895 0.270153c0 0 14.666024 0.465604 14.690584 0.465604l0 0.100284c12.132318-0.638543 24.221658 5.207605 31.100322 16.409738 5.504364 9.016351 6.437619 19.6045 3.486404 28.988218L893.82573 486.837924z" p-id="2519" fill="#4e5969"></path><path d="M264.827039 924.31872c0.319272 0.024559 0.441045 0.024559 0.295735-0.024559 0.243547-0.048095 0.367367-0.074701-0.295735-0.074701s-0.539282 0.026606-0.271176 0.074701C264.43409 924.343279 264.532327 924.343279 264.827039 924.31872z" p-id="2520" fill="#4e5969"></path></svg>
                        <span>{{cardLists.prefer}}</span>
                    </li>
                    <li class="footer-item">
                        <svg t="1660113398550" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2532" width="200" height="200"><path d="M511.9 827.5L610.7 726l17.4-17.9h209v-472H187.3v472.1h208.4l17.4 17.9 98.8 101.4m0 77.9c-4.1 0-8.3-1.6-11.5-4.9L370.7 767.3H166.6c-21.2 0-38.4-17.6-38.4-39.3V216.4c0-21.7 17.2-39.3 38.4-39.3h691.2c21.2 0 38.4 17.6 38.4 39.3V728c0 21.7-17.2 39.3-38.4 39.3H653L523.3 900.5c-3.2 3.2-7.3 4.9-11.4 4.9z" fill="#4e5969" p-id="2533"></path><path d="M334.9 433c27.2 0 49.3 22 49.3 49.2 0 27.2-22 49.2-49.3 49.2-27.2 0-49.2-22-49.2-49.2 0-27.1 22.1-49.2 49.2-49.2zM512.2 433c27.2 0 49.2 22 49.2 49.2 0 27.2-22 49.2-49.2 49.2-27.2 0-49.2-22-49.2-49.2 0-27.1 22-49.2 49.2-49.2zM689.4 433c27.2 0 49.2 22 49.2 49.2 0 27.2-22 49.2-49.2 49.2-27.2 0-49.3-22-49.3-49.2 0.1-27.1 22.1-49.2 49.3-49.2z" fill="#4e5969" p-id="2534"></path></svg>
                        <span>{{cardLists.comments}}</span>
                    </li>
                </ul>
            </div>
            <img v-if="cardLists.picture!=''" :src="cardLists.picture" alt="">
        </div>
        
        
    </div>

</div>
</template>
<style  scoped>
.card-container{
    width: 100%;
}
.card-item{
    width: 100%;
    box-sizing: border-box;
    height: 150px;
    padding: 20px 12px;
    padding-bottom: none;
    background-color: #fff;
    border-bottom: 1px solid #f1f1f1;
    cursor: pointer;
}
.card-item:hover{
    background-color: #fbfbfb;
}
.information-show{
    position: relative;
    display: flex;
    flex-direction: row;
}
.close{
    position: absolute;
    right: 0;
    color: #86909c;
    top: -8px;
    display: none;
}
.card-item:hover .close{
    display: block;
}
.show-adver{
    position: absolute;
    right: 0;
    color: #86909c;
    top: 2px;
    font-size: 1rem;
    display: block;
    border: 1px solid #86909c;
    padding: 0 2px;
    border-radius: 2px;
}
.information-show span svg{
    width: 1rem;
    height: 1rem;
}
.information-show li{
    font-size: 13px;
    line-height: 22px;
}
.dividing{
    margin: 0 8px;
    color: #e5e6eb;
}
.article-writer{
    color: #4e5969;
    white-space: nowrap;
    word-break: break-all;
}
.article-title{
    margin-top: 6px;
    font-size: 16px;
    line-height: 24px;
    color: #1d2129;
    font-weight: 700;
    margin-bottom: 8px;
}
.article-title:visited{
    color: #86909c;
}
.article-content{
    display: -webkit-box;
    color: #86909c;
    line-height: 22px;
    font-size: 13px;
    overflow: hidden;
    text-overflow:ellipsis;
    margin-bottom: 10px;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
}
.article-footer{
    display: flex;
}
.article-footer li{
    line-height: 18px;
    margin-right: 14px;
    color: #4e5969;
}
.footer-item{
    position: relative;
    display: flex;
    flex-direction: row;
    font-size: 13px;
}
.footer-item svg{
    top: 0;
    left: 0;
    height: 18px;
    width: 18px;
    display: block;
}
.footer-item span{
    margin-left: 6px;
}
.article-box{
    display: flex;
    align-items: center;
}
.box{
    flex: 1;
    width: 0;
}
.article-box img{
    width: 120px;
    height: 80px;
    margin-left: 24px;
}
</style>