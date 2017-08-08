<template>
	<div>
		<div class="box2"></div>
		<div class="radius_test"></div>
		<div class="sanjiao"></div>
	</div>


	
</template>

<script type="text/javascript"></script>

<style scoped lang="less">
	/*这种注释是会被编译的*/
//这种注释是不会被编译的

@width:300px;

.box{
	width: @width;
	height: @width;
	background-color: red;
	//.border;
	// .test_hunhe;
	.test_hunhe_03;
}

//混合
.border{
	border:solid 5px pink;
}

.box2{
	.box;
	margin-left: 50px;
}

//混合-可带参数的
.border_02(@border_width){
	border:solid @border_width yellow;
}

.test_hunhe{
	.border_02(30px);
}

//混合-默认带值
.border_03(@border_width:10px){
	border:solid green @border_width;
}

.test_hunhe_03{
	.border_03();
}

//混合的例子
.border-radius(@radius:5px){
	-webkit-border-radius:@radius;
	-moz-border-radius:@radius;
	border-radius:@radius;
} 

.radius_test{
	width: 100px;
	height: 40px;
	background-color: green;
	.border-radius();
}


//匹配模式
.triangle(top,@w:5px,@c:#ccc){
	border-width: @w;
	border-color: transparent transparent @c transparent;
	border-style: dashed dashed solid dashed;
}

.triangle(bottom,@w:5px,@c:#ccc){
	border-width: @w;
	border-color: @c transparent transparent transparent;
	border-style: solid dashed dashed dashed;
}

.triangle(right,@w:5px,@c:#ccc){
	border-width: @w;
	border-color: transparent transparent transparent @c ;
	border-style: dashed dashed dashed solid;
}

.triangle(@_,@w:5px,@c:#ccc){
	width: 0px;
	height: 0px;
	overflow: hidden;
}

.sanjiao{
	
	.triangle(bottom, 100px);
}


</style>