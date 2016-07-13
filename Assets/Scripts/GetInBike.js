#pragma strict

 public var spawnCamera : Camera;
 public var carCamera : Camera;
 public var bikeCamera : Camera;
 public var controlBike : UnityStandardAssets.Vehicles.Car.CarUserControl;

private var guiShow : boolean = false;
private var inCar : boolean = false;

var bike : GameObject;

var rayLength = 10;

function Update()
{
    var hit : RaycastHit;
    var fwd = transform.TransformDirection(Vector3.forward);
    
    if(Physics.Raycast(transform.position, fwd, hit, rayLength))
    {
        if(hit.collider.gameObject.tag == "Bike")
        {
            guiShow = true;
            if(Input.GetKeyDown("e") && inCar == false)
            {
                controlBike.enabled = true;
                spawnCamera.GetComponent.<Camera>().enabled = false;
                carCamera.GetComponent.<Camera>().enabled = false;
                bikeCamera.GetComponent.<Camera>().enabled = true;                
                inCar = true;
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
    if(guiShow == true && inCar == false)
    {
        GUI.Box(Rect(Screen.width / 2, Screen.height / 2, 100, 25), "Get on bike");
    }
}