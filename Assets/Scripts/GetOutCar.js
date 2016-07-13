#pragma strict

 public var spawnCamera : Camera;
 public var carCamera : Camera;
 public var bikeCamera : Camera;
 public var theaterCamera : Camera;
 public var controlCar : UnityStandardAssets.Vehicles.Car.CarUserControl;

private var guiShow : boolean = false;
private var inCar : boolean = true;

var barrier : GameObject;
var rayLength = 50;

function Update()
{
    var hit : RaycastHit;
    var fwd = transform.TransformDirection(Vector3.forward);
    
    if(Physics.Raycast(transform.position, fwd, hit, rayLength))
    {
        if(hit.collider.gameObject.tag == "Barrier")
        {
            guiShow = true;
            if(Input.GetKeyDown("e") && inCar == true)
            {
                controlCar.enabled = false;
                spawnCamera.GetComponent.<Camera>().enabled = false;
                carCamera.GetComponent.<Camera>().enabled = false;
                bikeCamera.GetComponent.<Camera>().enabled = false;
                theaterCamera.GetComponent.<Camera>().enabled = true;                
                inCar = false;
                guiShow = false;                
            }           
        }        
    } 
    
    else
    {
        guiShow = false;
    }     
}

function OnGUI()
{
    if(guiShow == true && inCar == true)
    {
        GUI.Box(Rect(Screen.width / 2, Screen.height / 2, 100, 25), "Get out of car");
    }
}