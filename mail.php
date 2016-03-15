<?php 



	print_r($_POST);



	// $array = explode(",", $dataForm);

		extract($_POST);

	print_r($array);



	function complete_mail() {
 
 
// Получаем данные из форм и сохраняем в массив
	$postData = array(
	  'Имя:' => $dataForm[0],
	  'Телефон' => $dataForm[1],
	  'Почта:' => $dataForm[2],
	  'Источник' => $dataForm[4]
	);
	$strPostData = '';
	foreach ($postData as $key => $value)
	$strPostData .= ($strPostData == '' ? '' : ' ').$key.' '.($value)."<br>";
	$str .= "<p><strong>Заявка:</strong> <br/> ".($strPostData)."</p>\r\n";


}




	$address = "iokononyuk@yandex.ua"; 





	$sub = "Cообщение с сайта UP&DO";

	$mes = "Имя: $dataForm[0] \nE-mail: $dataForm[2] \nТелефон: $dataForm[1] \n Книга: $dataForm[3]";

	$send = mail ($address,$sub,$mes,"Content-type:text/plain; charset = utf-8; From:$email");

	if ($send == 'true') { echo "Сообщение отправлено!"; }

	else { echo "Сообщение не отправлено!"; }



?>


<?
 
define('CRM_HOST', 'implamax.bitrix24.ua'); // Домен срм системы
define('CRM_PORT', '443'); // порт
define('CRM_PATH', '/crm/configs/import/lead.php');
define('CRM_LOGIN', 'k.dubovyk@constructor.biz.ua '); // логин
define('CRM_PASSWORD', 'qwerty1991'); // пароль
 
/********************************************************************************************/
 
if ($_SERVER['REQUEST_METHOD'] == 'POST')
{
 $leadData = $_POST['DATA'];
 
 $metka = "Заявка с сайта"; // Название лида, обязательное условие
 // получаем данные из полей и задаем название лида
 $postData = array(
 'TITLE' => $metka,
 'NAME' => $dataForm[0],
 'PHONE_WORK' =>$dataForm[1],
 'COMMENTS' => $leadData['COMMENTS'],
 'EMAIL_WORK' => $dataForm[2],
 'SOURCE_ID' => $dataForm[4],
 );
 
 // авторизация, проверка логина и пароля
 if (defined('CRM_AUTH'))
 {
 $postData['AUTH'] = CRM_AUTH;
 }
 else
 {
 $postData['LOGIN'] = CRM_LOGIN;
 $postData['PASSWORD'] = CRM_PASSWORD;
 }
 
 $fp = fsockopen("ssl://".CRM_HOST, CRM_PORT, $errno, $errstr, 30);
 if ($fp) {
 // формируем и шифруем строку с данными из формы
 $strPostData = '';
 foreach ($postData as $key => $value)
 $strPostData .= ($strPostData == '' ? '' : '&').$key.'='.urlencode($value);
 $str = "POST ".CRM_PATH." HTTP/1.0\r\n";
 $str .= "Host: ".CRM_HOST."\r\n";
 $str .= "Content-Type: application/x-www-form-urlencoded\r\n";
 $str .= "Content-Length: ".strlen($strPostData)."\r\n";
 $str .= "Connection: close\r\n\r\n";
 
 $str .= $strPostData;
 
 // отправляем запрос в срм систему
 fwrite($fp, $str );
 
 $result = '';

 while (!feof($fp)) {
		$result .= fgets($fp, 128);
	}
 	fclose($fp);
 	$response = explode("\r\n\r\n", $result);
 	$output = '<pre>'.print_r($response[1], 1).'</pre>';
 } else {
		 echo 'Connection Failed! '.$errstr.' ('.$errno.')';
	}
}
else {
	$output = '';
}
 
?>