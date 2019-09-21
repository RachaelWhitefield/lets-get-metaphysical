using System.Collections;
using System.Collections.Generic;
using UnityEngine;

[CreateAssetMenu(menuName = "State")]

public class State : ScriptableObject
{
   
  
 [TextArea(14,10)] [SerializeField] string infoText;
 [SerializeField] State[] nextStates;

 public string GetStateInfo() {
     return infoText;
 }

    public State[] GetNextState() {
        return nextStates;
    }
}
