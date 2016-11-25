;(function($){

	var Gwcjd=function(ele,opt){

			this.old={
				val:1,
				max:10,
				min:1,
				step:1,
				dj:10,
				succe:null
			}
		this.opt=$.extend({},this.old,opt);
		this.ele=(typeof ele=="string")? $(ele):ele;
	//	console.log(this.opt.val);
		var str=$("<div class='ds'><input type='text' value='"+this.opt.val+"'/><span class='add'></span><span class='sub'></span></div><p class='dj'>单价：<span>"+this.opt.dj+"元</span></p><p>总价：<span class='zj'></span></p>");
		this.ele.append(str);

		this.opt.succe&&this.opt.succe(this.opt.val,this.opt.dj);
		var that=this;
		$(".add").on("click",function(){
			var val=$(".ds").find("input").val()*1;
			var num=val+that.opt.step;
			if(num>that.opt.max)return false;
			$(".ds").find("input").val(num);
			that.opt.succe&&that.opt.succe(num,that.opt.dj);
		})
		$(".sub").on("click",function(){
			var val=$(".ds").find("input").val()*1;
			var num=val-that.opt.step;
			if(num<that.opt.min)return false;
			$(".ds").find("input").val(num);
			that.opt.succe&&that.opt.succe(num,that.opt.dj);
		})
		
	}

	$.gwcfn=function(ele,opt){
		
		new Gwcjd(ele,opt);
	}


})(jQuery);