import { updateCurrentPosition, updateTargetPosition, updateCurve, incrementCounter, resetCounter, selectCamera } from '../redux/cameraSlice'
import { useDispatch,useSelector } from 'react-redux'
import * as THREE from 'three'

export function calcLatLonFromPos(x,y,z) {
    const phi = Math.acos(y)
    const lat = -(phi/(Math.PI/180)) + 90
    let lon = ((Math.acos(-(x/Math.sin(phi)))/(Math.PI/180)) - 180)

    //if pos is on eastern hemisphere, reverse longitude
    if(Math.sign(z) === -1) {
      lon = -lon
    } 

    const coordinates = {
      lat,
      lon
    }

    return coordinates
}

export function getCurve(start, end) {
    const v1 = new THREE.Vector3(start[0],start[1],start[2])
    const v2 = new THREE.Vector3(end[0],end[1],end[2])

    let points = []

    for (let i = 0; i < 20; i++) {
      let p = new THREE.Vector3().lerpVectors(v1,v2, i/12)
      p.normalize()
      p.multiplyScalar(2.8)
      points.push(p)
    }
    
    const path = new THREE.CatmullRomCurve3(points)

    const curvePoints = path.getPoints(20)

    let pointsArr = []

    curvePoints.forEach(point => {
      const {x, y, z} = point
      pointsArr.push([x,y,z])
    })

    return pointsArr
}

export function calcPosFromLatLon(lat, lon) {
    const phi = (90 - lat)*(Math.PI/180)
    const theta = (lon +180)*(Math.PI/180)
  
    const x = -(Math.sin(phi)*Math.cos(theta))
    const z = (Math.sin(phi)*Math.sin(theta))
    const y = (Math.cos(phi))
  
    return {x,y,z}
}