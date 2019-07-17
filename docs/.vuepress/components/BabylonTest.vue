// <template lang="pug">
// Scene(ambient="#dddddd")
//     Camera(type="arcRotate")
//     DirectionalLight
//     HemisphericLight(emissive="#008800")
//     PointLight(specular="#0F0")
//     Box(:position="[-2,0,0]")
//         Material(diffuse="#0064A6")
//         Animation(property="rotation.x", :duration="20", :end="Math.PI * 2")
//         Animation(property="rotation.y", :duration="20", :end="Math.PI * -2")
//     IcoSphere(:position="[1.3,0,0]")
//         Material(diffuse="#009890")
//         Animation(property="rotation.x", :duration="30", :end="Math.PI * 2")
//         Animation(property="rotation.y", :duration="30", :end="Math.PI * 2")
//     Sphere(:position="[6,0,0]" :scaling="[1,1,1]")
//         Material(diffuse="#AD1644")
//     Torus(:position="[4, 0, 0]")
//         Material(diffuse="#E6A23C")
//         Animation(property="rotation.x", :duration="10", :end="Math.PI * 2")
//     Entity (v-model="myEntity2" :position="[6, 0, 0]")
//         Box(:position="[-3,3,3]")
//         Box(:position="[-9,3,3]")
//         Box(:position="[-3,-3,3]")
//         Box(:position="[-9,-3,3]")
//         Box(:position="[-3,3,-3]")
//         Box(:position="[-3,-3,-3]")
//         Box(:position="[-9,3,-3]")
//         Box(:position="[-9,-3,-3]")
        
//         Entity (v-model="myEntity21" :position="[6, 0, 0]")
//             Animation(property="rotation.x" :duration="5")
//                 Key(frame="0%" :value="0")
//                 Key(frame="100%" :value="Math.PI * 2")
//             Box(:position="[-4,2,2]")
//                 Material(diffuse="#741669")
//             Box(:position="[-4,-2,2]")
//                 Material(diffuse="#741669")
//             Box(:position="[-8,2,2]")
//                 Material(diffuse="#741669")
//             Box(:position="[-8,-2,2]")
//                 Material(diffuse="#741669")
//             Box(:position="[-4,2,-2]")
//                 Material(diffuse="#741669")
//             Box(:position="[-4,-2,-2]")
//                 Material(diffuse="#741669")
//             Box(:position="[-8,2,-2]")
//                 Material(diffuse="#741669")
//             Box(:position="[-8,-2,-2]")
//                 Material(diffuse="#741669")
// </template>

// <script>
// import { Entity, 
//     Scene,
//     Camera,

//     HemisphericLight, 
//     DirectionalLight,
//     PointLight,
    
//     Material,

//     Animation,
//     Key,

//     Box,
//     Sphere,
//     Torus,
//     IcoSphere,
//     Cannon } from 'vue-babylonjs';

// export default {
//     name: "Babylon",
//     mixins: [Entity],
//     components: {
//         Scene,
//         Camera,
//         Entity,

//         HemisphericLight, 
//         DirectionalLight,
//         PointLight,
        
//         Material,

//         Animation,
//         Key,

//         Box,
//         Sphere,
//         Torus,
//         IcoSphere,
//         Physics: Cannon },
// }
// </script>