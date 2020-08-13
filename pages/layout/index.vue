<template>
  <div>
    <nav class="navbar navbar-light">
      <div class="container">
        <!-- <a class="navbar-brand" href="/">conduit</a> -->
        <nuxt-link class="nav-brand" to="/">conduit</nuxt-link>
        <ul class="nav navbar-nav pull-xs-right">
          <li class="nav-item">
            <!-- Add "active" class when you're on that page" -->
            <!-- <a class="nav-link active" href>Home</a> -->
            <nuxt-link class="nav-link" exact to="/">Home</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/editor">
              <i class="ion-compose"></i>&nbsp;New Post
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/settings">
              <i class="ion-compose"></i>&nbsp;Settings
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/login">Sign in</nuxt-link>
          </li>
           <li class="nav-item">
            <nuxt-link class="nav-link" to="/register">Sign up</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/profile/123">
                <img style="height: 20px;width:25px" src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1597323942&di=8bf1a98fbcd0776deb0ac49118eecba8&src=http://n.sinaimg.cn/spider2020813/250/w600h450/20200813/cf0e-ixreehp5222056.png" alt="">
                xxx
            </nuxt-link>
          </li>
        </ul>
      </div>
    </nav>

    <nuxt />

    <footer>
      <div class="container">
        <a href="/" class="logo-font">conduit</a>
        <span class="attribution">
          An interactive learning project from
          <a href="https://thinkster.io">Thinkster</a>. Code &amp; design licensed under MIT.
        </span>
      </div>
    </footer>
  </div>
</template>