using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using TMPro;

public class Fade : MonoBehaviour
{
   public static Fade Instance{set;get;}

  [SerializeField] Image thisImg;
//   [SerializeField] Text thisText;
  [SerializeField] TextMeshProUGUI thisText;
  
   private bool isInTransition;
   private float transition;
   private bool isShowing;
   private float duration;

   private void Awake() {
       Instance = this;
   }

   public void ObjectFade(bool showing, float duration) {
       isShowing = showing;
       isInTransition = true;
       this.duration = duration;
       transition = (isShowing) ? 0: 1;
   }

   private void Update() {
       if(!isInTransition) return;

       transition += (isShowing) ? Time.deltaTime * (1/duration): -Time.deltaTime * (1/duration);
       thisImg.color = Color.Lerp(new Color(1,1,1,0),Color.white, transition);
    //    thisText.color = Color.Lerp(new Color(0,0,0,0),Color.black, transition);

       if(transition > 1 || transition < 0) isInTransition = false;
   }
}
