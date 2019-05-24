//Original script written by CGExplorer01/寻根问底1号
//for the ease of MAD/AMV creation,
//Effects are implemented based on various tutorials on the Internet.

runScript(this);

 function runScript(thisObj) {
 
 var UI =scriptBuildUI(thisObj);
 if (UI !== null &&UI instanceof Window) {  
        UI.center();  
        UI.show();  
    } 


 function scriptBuildUI(thisObj) {  

var window = (thisObj instanceof Panel) ? thisObj :  new Window("palette", "Effects Collection", undefined,{resizeable: true});
window.orientation = "column";
var g1 = window.add("group", undefined, "g1");
g1.orientation = "column";
g1.add("statictext", undefined, "请输入效果名称");
var  enterName= g1.add("edittext", undefined, "效果名称");


var g2 = window.add("group", undefined, "Buttons");

g2.orientation = "row";
var applybutton = g2.add("button", undefined, "应用");
//var cancelbutton = g2.add("button", undefined, "取消");

//cancelbutton.onClick =function(){
//    window.close();
//    }

applybutton.onClick =function(){
    var effectName0 = enterName.text;
      mainProgram(effectName0);
    }

window.layout.layout(true);
return window;
} //end BuildUI

}//end script(thisObj)

function mainProgram(name) {
var effectName =name;                       
var effectfound = false;
//---------------------------------------------------效果分割线----------------------------------------------------------------------------------------------------
if (effectName == "涟漪" || effectName =="rpl") { //reference tutorial source： bilibili.com id 冰叹
    effectfound = true;
   
app.beginUndoGroup("Create ripple");
 
 
 app.activeViewer.setActive();  
    var main = app.project.activeItem;
    if (main) {
        
var toffset = 0.12 
var project = app.project;
var comp = project.items.addComp("涟漪", 400, 400, 1, 0.5+toffset, main.frameRate);
var Bottom = comp.layers.addSolid([1, 1, 1], "圆1", 400, 400, 1, 0.5*main.frameRate);
Bottom.inPoint = 0.09;
var Top = comp.layers.addSolid([1, 1, 1], "圆2", 400, 400, 1, 0.5*main.frameRate);
Top.outPoint = 0.5;


    var circle2= Top.Effects.addProperty("ADBE Circle");
    var opa2  = Top.opacity;
    var edge2 = Top("Effects")("Circle")("Edge");
    var radius2 = Top("Effects")("Circle")("Radius");
    var opacity2 = Top("Effects")("Circle")("Radius");
    var feather21 = Top("Effects")("Circle")("Feather Outer Edge");
    var feather22 = Top("Effects")("Circle")("Feather Inner Edge");
    
    var circle1= Bottom.Effects.addProperty("ADBE Circle");
    var opa1  = Bottom.opacity;
    var edge1 = Bottom("Effects")("Circle")("Edge");
    var radius1 = Bottom("Effects")("Circle")("Radius");
    var opacity1 = Bottom("Effects")("Circle")("Radius");
    var feather11 = Bottom("Effects")("Circle")("Feather Outer Edge");
    var feather12 = Bottom("Effects")("Circle")("Feather Inner Edge");
   
    edge2.setValue(4);
    radius2.setValueAtTime(0,0);
    radius2.setValueAtTime(0.5,200);
    opa2.setValueAtTime(0.25,100);
    opa2.setValueAtTime(0.5,0);
    feather21.setValue(10);
    feather22.setValue(10);
    
    edge1.setValue(4);
    radius1.setValueAtTime(0+toffset,0);
    radius1.setValueAtTime(0.5+toffset,200);
    opa1.setValueAtTime(0.25+toffset,100);
    opa1.setValueAtTime(0.5+toffset,0);
    feather11.setValue(10);
    feather12.setValue(10);
    
    
    var comp2 = project.items.addComp("涟漪群",main.width, main.height, main.pixelAspect, main.duration, main.frameRate);
    var solid = comp2.layers.addSolid([1,1,1], "粒子", main.width, main.height, 1);
    var particle = solid.Effects.addProperty("Particular");
    particle.property("Emitter Type").setValue(2);
    particle.property("Velocity").setValue(0);
    particle.property("Life [sec]").setValue(0.5);
    particle.property("Emitter Size X").setValue(2000);
    particle.property("Emitter Size Y").setValue(2000);
    particle.property("Particle Type").setValue(6);
    var ripple = comp2.layers.add(comp);
    ripple.enabled = false;
    particle.property("tc Particular-0066").setValue(1);
    particle.property("Time Sampling").setValue(3);
    particle.property("Size").setValue(46);
    particle.property("Size Random [%]").setValue(100);
    rippleg=main.layers.add(comp2);
     rippleg.enabled = false;
    var adjust= main.layers.addSolid([1,1,1], "扭曲", main.width, main.height, 1);
    adjust.adjustmentLayer = true;
    dis = adjust.Effects.addProperty("ADBE Displacement Map");
    dis.property("Displacement Map Layer").setValue(2);
    dis.property("Use For Horizontal Displacement").setValue(5);
    dis.property("Use For Vertical Displacement").setValue(5);
    dis.property("Max Horizontal Displacement").setValue(30);
    dis.property("Max Vertical Displacement").setValue(30);
    dis.property("Edge Behavior").setValue(1);
     alert("效果添加完成")
    }
    else{alert("请先新建合成")}
    
//comp.openInViewer();    

app.endUndoGroup();
}
//------------------------------------------------------------效果分割线-------------------------------------------------------------------------------------------
if (effectName == "速度线" ||effectName == "spl") { //reference tutorial source： bilibili.com id 冰叹
    effectfound = true;
   
app.beginUndoGroup("Create speedline");
 
 
 app.activeViewer.setActive();  
    var main = app.project.activeItem;
    if (main) {
        
var w = main.width;
var h  = main.height
var color = main.layers.addSolid([0, 0, 0], "速度线颜色", w, h, 1);
var speedline = main.layers.addSolid([1, 1, 1], "速度线", w, h, 1);
var fractal = speedline.Effects.addProperty("ADBE Fractal Noise");
fractal.property("Contrast").setValue(94);
fractal.property("Brightness").setValue(-50);
fractal.property("Uniform Scaling").setValue(0);
fractal.property("Scale Width").setValue(30);
fractal.property("Scale Height").setValue(2600);
fractal.property("Evolution").expression = "time*2000";
 var shape = new Shape();
 shape.vertices = [[w/6,-60], [w/6,h+60],[w/6*5,h+60],[w/6*5,-60]];
 var mask = speedline.Masks.addProperty("Mask");
mask.property("maskShape").setValue(shape);  
mask.property("Mask Feather").setValue([0,0]);  
mask.maskMode = MaskMode.SUBTRACT;  
color.trackMatteType = TrackMatteType.LUMA;
alert("效果添加完成")
    }
    else{alert("请先新建合成")}
    
//comp.openInViewer();    

app.endUndoGroup();
}
//------------------------------------------------------------效果分割线---------------------------------------------------------------------------------
 if (effectName == "圆速度线" ||effectName == "cspl") {//reference tutorial source： bilibili.com id 冰叹
    effectfound = true;
   
app.beginUndoGroup("Create cspeedline");
 
 
 app.activeViewer.setActive();  
    var main = app.project.activeItem;
    if (main) {
        
var w = main.width;
var h  = main.height
var th = w/2*0.5;
var tv = h/2*0.5;
var color = main.layers.addSolid([0, 0, 0], "速度线颜色", w, h, 1);
var project = app.project;
comp = project.items.addComp("圆形速度线",main.width, main.height, main.pixelAspect, main.duration, main.frameRate);
var speedline = comp.layers.addSolid([1, 1, 1], "速度线", w, h, 1);
var fractal = speedline.Effects.addProperty("ADBE Fractal Noise");
fractal.property("Contrast").setValue(94);
fractal.property("Brightness").setValue(-50);
fractal.property("Uniform Scaling").setValue(0);
fractal.property("Scale Width").setValue(30);
fractal.property("Scale Height").setValue(2600);
fractal.property("Evolution").expression = "time*2000";
var polar = speedline.Effects.addProperty("ADBE Polar Coordinates");
polar.property("Interpolation").setValue(1);
polar.property("Type of Conversion").setValue(1);
speedline.scale.setValue([w/h*1.5*100,w/h*1.5*100]);
spcomp=main.layers.add(comp);

 var shape = new Shape();
shape.vertices = [[w/2,0],[0,h/2],[w/2,h],[w,h/2]];
shape.inTangents = [[th,0],[0,-tv],[-th,0],[0,tv]];
shape.outTangents = [[-th,0],[0,tv],[th,0],[0,-tv]];
 var mask = spcomp.Masks.addProperty("Mask");
mask.property("maskShape").setValue(shape);  
mask.property("Mask Feather").setValue([140,140]); 
mask.property("Mask Expansion").setValue(-168);  
mask.maskMode = MaskMode.SUBTRACT;  
color.trackMatteType = TrackMatteType.LUMA;
alert("效果添加完成")
    }
    else{alert("请先新建合成")}
    
//comp.openInViewer();    

app.endUndoGroup();
}
//------------------------------------------------------------效果分割线---------------------------------------------------------------------------------------------- 
  if (effectName == "雨" ||effectName == "rain") {//reference tutorial source： bilibili.com id 冰叹
    effectfound = true;
   
app.beginUndoGroup("Create rain");
 
 var project = app.project;
 
 app.activeViewer.setActive();  
    var main = app.project.activeItem;
    if (main) {
        
var w = main.width;
var h  = main.height
var th = w/2*0.5;
var tv = h/2*0.5;

var first = main.layers.addSolid([1, 1, 1], "雨", w, h, 1);
first.outPoint = 3;
var fractal = first.Effects.addProperty("ADBE Fractal Noise");
fractal.property("Contrast").setValue(1200);
fractal.property("Brightness").setValue(-400);
fractal.property("Uniform Scaling").setValue(0);
fractal.property("Scale Width").setValue(1);
fractal.property("Scale Height").setValue(3000);
fractal.property("Offset Turbulence").setValueAtTime(0,[w/2,-3000]);
fractal.property("Offset Turbulence").setValueAtTime(3,[w/2,10000]);
var fractal2 =fractal.duplicate();
fractal2.property("Evolution").expression = "time*360";
fractal2.property("Blending Mode").setValue(4);


if(parseInt(app.version)>13){
var blur = first.Effects.addProperty("ADBE Gaussian Blur 2");
blur.property("Blurriness").setValue(20);
blur.property("Repeat Edge Pixels").setValue(1); }
else{
    var blur_old = first.Effects.addProperty("ADBE Fast Blur");
    blur_old.property("Blurriness").setValue(3);
    blur_old.property("Repeat Edge Pixels").setValue(1);}

var glow = first.Effects.addProperty("Glow");
glow.property("Glow Threshold").setValue(140);
glow.property("Glow Radius").setValue(3);
glow.property("Glow Intensity").setValue(1);

first.blendingMode = BlendingMode.SCREEN;
alert("效果添加完成")

    }
    else{alert("请先新建合成")}
    
    app.endUndoGroup();
}
 //----------------------------------------------------------效果分割线---------------------------------------------------------------------------------------------
   if (effectName == "背光" ||effectName == "blt") {//reference tutorial source： bilibili.com id 冰叹
    effectfound = true;
   
app.beginUndoGroup("Create backlight");
 
 var project = app.project;
 
 app.activeViewer.setActive();  
 var main = app.project.activeItem;
 var w = main.width;
 var h  = main.height
 
 if (main) {
 layer = main.selectedLayers[0];
 if (layer) {
     var back = main.layers.addSolid([1, 1, 1], "背景", w, h, 1);
     back.moveAfter(layer);
     layer2=layer.duplicate();
     fill = layer2.Effects.addProperty("ADBE Fill");
     fill.property("Color").setValue([1,1,1]);
      fill.property("Invert").setValue(1);
    
    if(parseInt(app.version)>13){
   var blur = layer2.Effects.addProperty("ADBE Gaussian Blur 2");
   blur.property("Blurriness").setValue(80);
   blur.property("Repeat Edge Pixels").setValue(1); }
   else{
    var blur_old = layer2.Effects.addProperty("ADBE Fast Blur");
    blur_old.property("Blurriness").setValue(70);
    blur_old.property("Repeat Edge Pixels").setValue(1);}

  //  layer3=layer.duplicate();
    
 //   var blur3 = layer3.Effects.addProperty("ADBE Gaussian Blur 2");
    
  //  if(blur3){    
  // blur3.property("Blurriness").setValue(5);
  // blur3.property("Repeat Edge Pixels").setValue(1); }
  // else{
 //   var blur_old3 = layer3.Effects.addProperty("ADBE Gaussian Blur");
  //  blur_old3.property("Blurriness").setValue(3);}

  //  layer3.opacity.setValue(50)
  //  layer3.blendingMode = BlendingMode.LIGHTEN;
    
    layer4=layer.duplicate();
    
    if(parseInt(app.version)>13){
   var blur4 = layer4.Effects.addProperty("ADBE Gaussian Blur 2");
   blur4.property("Blurriness").setValue(80);
   blur4.property("Repeat Edge Pixels").setValue(1); }
   else{
    var blur4_old = layer4.Effects.addProperty("ADBE Fast Blur");
    blur4_old.property("Blurriness").setValue(70);
    blur4_old.property("Repeat Edge Pixels").setValue(1);}

    layer4.opacity.setValue(30)
    layer4.blendingMode = BlendingMode.LIGHTEN;
  
     alert("效果添加完成")
     } else {alert("请选择要添加背光的图层")}



    }
    else{alert("请先新建合成")}
    
    app.endUndoGroup();
}
 
 //----------------------------------------------------------效果分割线---------------------------------------------------------------------------------------------
  if (effectName == "毛刺" ||effectName == "gli") {//reference tutorial source： bilibili.com id 冰叹
    effectfound = true;
   
app.beginUndoGroup("Create glitch");
 
 
 app.activeViewer.setActive();  
    var main = app.project.activeItem;
    if (main) {
        
var w = main.width;
var h  = main.height

var project = app.project;

comp = project.items.addComp("毛刺",main.width, main.height, main.pixelAspect, main.duration, main.frameRate);
var glitch = comp.layers.addSolid([1, 1, 1], "毛刺", w, h, 1);
var fractal = glitch.Effects.addProperty("ADBE Fractal Noise");
fractal.property("Contrast").setValue(300);
fractal.property("Brightness").setValue(-120);
fractal.property("Noise Type").setValue(1);
fractal.property("Uniform Scaling").setValue(0);
fractal.property("Scale Width").setValue(900);
fractal.property("Scale Height").setValue(70);
fractal.property("Evolution").expression = "time*3000";
glitch2 = glitch.duplicate();
glitch2("Effects")("ADBE Fractal Noise")("Evolution").expression= "time*3000+100";
glitch3 = glitch.duplicate();
glitch3("Effects")("ADBE Fractal Noise")("Evolution").expression= "time*3000+300";
glitch4 = glitch.duplicate();
glitch4("Effects")("ADBE Fractal Noise")("Evolution").expression= "time*3000+500";
glcomp=main.layers.add(comp);
glcomp.enabled = false;

var adjust= main.layers.addSolid([1,1,1], "扭曲", main.width, main.height, 1);
    adjust.adjustmentLayer = true;
    dis = adjust.Effects.addProperty("ADBE Displacement Map");
    dis.property("Displacement Map Layer").setValue(2);
    dis.property("Use For Horizontal Displacement").setValue(5);
    dis.property("Use For Vertical Displacement").setValue(5);
    dis.property("Max Horizontal Displacement").setValue(10);
    dis.property("Max Vertical Displacement").setValue(10);
    dis.property("Edge Behavior").setValue(1);

 
alert("效果添加完成")
    }
    else{alert("请先新建合成")}
    
//comp.openInViewer();    

app.endUndoGroup();
}
 //--------------------------------------------------------------------------效果分割线-----------------------------------------------------------------------------------------------------------
 if (effectName == "文字穿梭1" ||effectName == "thch1") {//reference tutorial source： bilibili.com id 丛伊俊Life_studio
    effectfound = true;
   
app.beginUndoGroup("Create throughCharacters");
 
 var project = app.project;
 
 app.activeViewer.setActive();  
 var main = app.project.activeItem;
 var w = main.width;
 var h  = main.height;
 var x0 = w/2;
 var y0 = h/2;
 var z0 = 0;

 if (main) {
 layers = main.selectedLayers;
 main.motionBlur = true;
 if (main.selectedLayers[0]) {
     
     for (var i = 0; i < layers.length; i++) {
      layers[i].rotation.setValue((i % 2)*90);
      layers[i].threeDLayer = true;
      layers[i].motionBlur = true;
      centerAnchor3d(layers[i]);
    //  var text = layers[i].property("Source Text").value;
   //   var fs = text.fontSize;
      var offset = [w/24*2*(Math.random()-0.5),h/24*2*(Math.random()-0.5),0];
  
      switch(i) {
        case 0 :
     layers[i].position.setValue([644*w/1280,334*h/720,-213]+offset);
      break;
        case 1 : 
      layers[i].position.setValue([1021*w/1280,625*h/720,220]+offset);
      break;
        case 2 : 
      layers[i].position.setValue([1439*w/1280,454*h/720,0]+offset);
      break;
        case 3 : 
      layers[i].position.setValue([-199*w/1280,653*h/720,120]+offset);
      break;
       case 4 : 
      layers[i].position.setValue([338*w/1280,1124*h/720,338]+offset);
      break;
       case 5 : 
      layers[i].position.setValue([30*w/1280,-206*h/720,-320]+offset);
      break;
       case 6 : 
      layers[i].position.setValue([292*w/1280,869*h/720,695]+offset);
      break;
      case 7 : 
      layers[i].position.setValue([151*w/1280,342*h/720,-9]+offset);
      break;
       case 8 : 
      layers[i].position.setValue([657*w/1280,-98*h/720,97]+offset);
      break;
       case 9 : 
      layers[i].position.setValue([1370*w/1280,-101*h/720,-244]+offset);
      break;
    
      default:
       alert("多于10个图层，请自行编辑剩余的图层效果")
      }
     }
     alert("效果添加完成")
     } else {alert("请选择要添加效果的图层")}



    }
    else{alert("请先新建合成")}
    
    app.endUndoGroup();
}
 
 //----------------------------------------------------------------------效果分割线-----------------------------------------------------------------------------------------------------------
  if (effectName == "文字穿梭2" ||effectName == "thch2") {//reference tutorial source： bilibili.com id 丛伊俊Life_studio
    effectfound = true;
   
app.beginUndoGroup("Create throughCharacters2");
 
 var project = app.project;
 
 app.activeViewer.setActive();  
 var main = app.project.activeItem;
 var w = main.width;
 var h  = main.height;
 var x0 = w/2;
 var y0 = h/2;
 var z0 = 0;

 if (main) {
 layers = main.selectedLayers;
 main.motionBlur = true;
 var nl =main.layers.addNull();

 
 nl.threeDLayer = true;
 centerAnchor3d(nl);
 var camera = main.layers.addCamera("摄像机", [w/2,h/2]);
 camera.position.setValue([w/2,h/2,-w*5/6]);
  camera.zoom.setValue(1400);
 camera.focusDistance.setValue(900);
 camera.aperture.setValue(200);
 camera.parent = nl;

 
 camera.depthOfField.setValue(true);
 
 if (main.selectedLayers[0]) {
     
     for (var i = 0; i < layers.length; i++) {
      
      var rx = 0.;
      var ry = 0.;
      var rz = 0.;
      
      while(Math.abs(rx)<w/24||Math.abs(ry)<w/24||Math.abs(rz)<w/18) {
       rx = 2*(Math.random()-0.5)*w/12; //random x, y, z offset, don't want them to be too small
       ry = 2*(Math.random()-0.5)*h/12;
       rz = 2*(Math.random()-0.5)*h/9;}
      var randompo = [0.,0.,0.]
      var pick = Math.random();
      
      if ( pick> 2/3) { randompo = [0,0,rz];} 
      else if (pick>1/3) { randompo = [0,ry,0];} 
      else{ randompo = [rx,0,0];}
      
      
     // layers[i].threeDLayer = true;
      layers[i].motionBlur = true;
      centerAnchor3d(layers[i]);
      nl.position.setValueAtTime(i*2, layers[i].position.value);
      nl.position.setSpatialTangentsAtKey(1,[0,0,0], [0,0,0]);
      nl.rotation.setValueAtTime(i*2, layers[i].rotation.value);
      nl.position.setValueAtTime((i+1)*2-0.3, layers[i].position.value+randompo);
      nl.rotation.setValueAtTime((i+1)*2-0.3, layers[i].rotation.value);
      }
  
     alert("效果添加完成")
     } else {alert("请选择要添加效果的图层")}



    }
    else{alert("请先新建合成")}
    
    app.endUndoGroup();
}
 
 function centerAnchor3d(layer) {
      var rec = layer.sourceRectAtTime(0,false);
      var xa=rec.width/2;
      var ya=rec.height/2;
      var xa0 = layer.anchorPoint.value[0]; 
      var ya0 = layer.anchorPoint.value[1]; 
       xa += rec.left;  
       ya +=rec.top; 
       var diff = [xa-xa0,ya-ya0,0];
       layer.anchorPoint.setValue([xa,ya,0]);
       var pos0 = layer.position.value;
       layer.position.setValue(pos0+diff);
     }
 //---------------------------------------------------------------------------效果分割线---------------------------------------------------------------------------------------------------------
 if (effectName == "rgb偏移" ||effectName == "rgbs") {//reference tutorial source： bilibili.com id 丛伊俊Life_studio
    effectfound = true;
   
app.beginUndoGroup("Create rgbshift");
 
 var project = app.project;
 
 app.activeViewer.setActive();  
 var main = app.project.activeItem;
 var w = main.width;
 var h  = main.height;
 
 if (main) {
 layer = main.selectedLayers[0];
 
 if (layer) {
     var channel = layer.Effects.addProperty("ADBE Shift Channels");
     var distort = layer.Effects.addProperty("ADBE Optics Compensation");
     var layer2 = layer.duplicate();
     var layer3 = layer2.duplicate();
     layer2.blendingMode = BlendingMode.ADD;
     layer3.blendingMode = BlendingMode.ADD;
 
   
     layer("Effects")("ADBE Shift Channels")("Take Green From").setValue(10);
     layer("Effects")("ADBE Shift Channels")("Take Blue From").setValue(10);
     layer3("Effects")("ADBE Shift Channels")("Take Red From").setValue(10);
     layer3("Effects")("ADBE Shift Channels")("Take Green From").setValue(10);
     layer2("Effects")("ADBE Shift Channels")("Take Red From").setValue(10);
     layer2("Effects")("ADBE Shift Channels")("Take Blue From").setValue(10);
     layer3("Effects")("ADBE Shift Channels")("Take Red From").setValue(10);
     layer3("Effects")("ADBE Shift Channels")("Take Green From").setValue(10);
     
     distort.property("Reverse Lens Distortion").setValue(1);
     distort.property("Field Of View (FOV)").setValue(30);
     layer2("Effects")("ADBE Optics Compensation")("Reverse Lens Distortion").setValue(1);
     layer2("Effects")("ADBE Optics Compensation")("Field Of View (FOV)").setValue(20);
     layer3("Effects")("ADBE Optics Compensation")("Reverse Lens Distortion").setValue(1);
     layer3("Effects")("ADBE Optics Compensation")("Field Of View (FOV)").setValue(10);
  
     alert("效果添加完成")
     } else {alert("请选择要添加效果的图层")}



    }
    else{alert("请先新建合成")}
    
    app.endUndoGroup();
}

//---------------------------------------------------------------效果分割线-----------------------------------------------------------------------------------------------------------------------





























if(effectfound == false) {alert("找不到输入的效果，请检查是否输入正确")}

}