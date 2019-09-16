using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class SceneLoader : MonoBehaviour
{
  //config params

  //saving ref to scenes in order to load specific instances depending on button
  [SerializeField] int crossScene = 1;
  [SerializeField] int nornScene = 2;
  [SerializeField] int singleScene = 3;

  
  public void LoadNextScene() {
      int currentSceneIndex = SceneManager.GetActiveScene().buildIndex;
      SceneManager.LoadScene(currentSceneIndex + 1);
  }

  public void LoadCrossScene() {
    SceneManager.LoadScene(crossScene);
  }

  public void LoadNornScene() {
    SceneManager.LoadScene(nornScene);
  }

  public void LoadSingleScene() {
    SceneManager.LoadScene(singleScene);
  }

  public void LoadStartScene() {
      SceneManager.LoadScene(0);
  }
}
