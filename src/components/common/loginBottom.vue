<template>
    <div>
      <div class="bottom">
              <div class="copyright">
                    <p class="bottomlink">Powered by
                      <a href="#" target="_blank">{{version.name}}@{{version.release}}</a>
                      </p>
              </div>
              <div class="copyright">
                  <p class="bottomlink">Copyright © 2019 - {{(new Date()).getFullYear()}} @ahcui. All Rights Reserved.</p>
              </div>
              <div class="hide">
                  鲁ICP备16031446号-7
              </div>
        </div>
    </div>
</template>

<script>
import { version} from '../../assets/core/index'


export default {
  setup() {
    return{
      version
      }
  },
}
</script>



<style scoped>
  .bottom {
    position: absolute;
    bottom: 0px;
    box-sizing: border-box;
    width: 100%;
    height: 40px;
    font-size: 12px;
    color: #ccc;
    background-color: #333744;
    opacity: 0.8;
  }
  .bottom .copyright
  {
      margin: 0px auto 0px auto;
      height:20px;
      width:600px;
      vertical-align: middle;
      text-align: center;
  }
  .bottom .copyright .bottomlink
  {
      line-height: 20px;
      height:20px;
      margin: unset;
  }
  .bottom .copyright .bottomlink a
  {
      color:inherit;
  }
</style>
