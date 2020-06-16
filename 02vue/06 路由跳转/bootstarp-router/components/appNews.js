let appNews = {
	template: `<!--右边主页面区域-->
    <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
		  <div class="header clearfix">
			<nav>
			  <ul class="nav nav-pills">
			  <!-- <li class="active"><a href="#">体育</a></li>
			  <li ><a href="#">科技</a></li>-->
				<router-link tag="li" to="/news/sport">
					<a>体育</a>
				</router-link>
				<router-link tag="li" to="/news/tech">
					<a>科技</a>
				</router-link>
			  </ul>
			</nav>
			<hr>
		  </div>
		   <!--设置路由出口-->
			<router-view></router-view>
	</div>`
}