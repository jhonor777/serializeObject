# serializeObject
This is a jQuery form serialization plug-in.The value of the name can be nested, and the plug-in can traverse it correctly.Output an object or JSON string
# Usage method
### 1.Introducing plug-in
```
<script src="jquery.min.js"></script>
<script src="serializeObject.js"></script>
```
*Rely on the jQuery plug-in*

### 2.HTML Example
```
<form id="fm">
  <label>name</label>
  <input type="text" name="name">
  <br>
  <label>age</label>
  <input type="text" name="age">
  <br>
  <label>edu</label>
  <input type="text" name="edu">
  <br>
  <label>fathername</label>
  <input type="text" name="familyInfo[0]">
  <br>
  <label>mothername</label>
  <input type="text" name="familyInfo[1]">
  <br>
  <label>grandpaname</label>
  <input type="text" name="familyInfo[2][yeye]">
  <br>
  <label>grandmaname</label>
  <input type="text" name="familyInfo[2][nainai]">
  <br>
  <label>height</label>
  <input type="text" name="info[height]">
  <br>
  <label>weight</label>
  <input type="text" name="info[weight]">
  <br>
  <label>bust</label>
  <input type="text" name="info[bust]">
  <br>
  <label>favorite music1</label>
  <input type="text" name="info[hobby][music][0]">
  <br>
  <label>favorite music2</label>
  <input type="text" name="info[hobby][music][1]">
  <br>
  <label>favorite food</label>
  <input type="text" name="info[hobby][food]">
</form>
```

### 3.Javascript Code

#### Method:
- serializeObject();
- serializeJson();
#### Call function：

```
var formDataObj = $('#fm').serializeObject();
var formDataJson = $('#fm').serializeJson();
console.log(formDataObj);
console.log(formDataJson);
```

# End

This plug-in can quickly serialize complex forms, which is a common function. If you can quickly fill in the form after serialization data, please share the code.Email:407662386@qq.com
