<?xml version="1.0" encoding="UTF-8"?>
<!-- Created with Jaspersoft Studio version 7.0.3.final using JasperReports Library version 6.2.2  -->
<jasperReport xmlns="http://jasperreports.sourceforge.net/jasperreports" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://jasperreports.sourceforge.net/jasperreports http://jasperreports.sourceforge.net/xsd/jasperreport.xsd" name="1. Phieu DKDT Dai Hoc 2026_page_1" pageWidth="595" pageHeight="842" columnWidth="595" leftMargin="0" rightMargin="0" topMargin="0" bottomMargin="0" uuid="9c88892d-c90d-4eae-a334-77603ab8cf6a">
	<property name="com.jaspersoft.studio.data.defaultdataadapter" value="One Empty Record"/>
	<import value="java.util.Date"/>
	<import value="java.text.SimpleDateFormat"/>
	<style name="DefaultStyle" isDefault="true" fontName="Times New Roman" fontSize="11"/>
	<queryString language="json">
		<![CDATA[]]>
	</queryString>
	<field name="noiNopHsCityCode" class="java.lang.String"/>
	<field name="noiNopHsCityName" class="java.lang.String"/>
	<field name="noiNopHsWardCode" class="java.lang.String"/>
	<field name="noiNopHsWardName" class="java.lang.String"/>
	<field name="truongName" class="java.lang.String"/>
	<field name="truongCode" class="java.lang.String"/>
	<field name="hoVaTen" class="java.lang.String"/>
	<field name="gender" class="java.lang.String"/>
	<field name="birthDate" class="java.lang.String"/>
	<field name="noiKhaiSinhChiTiet" class="java.lang.String"/>
	<field name="lop10CityCode" class="java.lang.String"/>
	<field name="noiKhaiSinhWardName" class="java.lang.String"/>
	<field name="noiKhaiSinhWardCode" class="java.lang.String"/>
	<field name="noiKhaiSinhCityName" class="java.lang.String"/>
	<field name="noiKhaiSinhCityCode" class="java.lang.String"/>
	<field name="thuongTruCityCode" class="java.lang.String"/>
	<field name="thuongTruCityName" class="java.lang.String"/>
	<field name="thuongTruWardName" class="java.lang.String"/>
	<field name="thuongTruChiTiet" class="java.lang.String"/>
	<field name="lop10MaTruong" class="java.lang.String"/>
	<field name="maXetTuyenCode" class="java.lang.String"/>
	<field name="tonGiaoName" class="java.lang.String"/>
	<field name="tonGiaoCode" class="java.lang.String"/>
	<field name="danTocName" class="java.lang.String"/>
	<field name="danTocCode" class="java.lang.String"/>
	<field name="lop10TruongName" class="java.lang.String"/>
	<field name="lop10CityName" class="java.lang.String"/>
	<field name="lop11MaTruong" class="java.lang.String"/>
	<field name="lop11CityName" class="java.lang.String"/>
	<field name="lop11CityCode" class="java.lang.String"/>
	<field name="lop11TruongName" class="java.lang.String"/>
	<field name="lop12CityName" class="java.lang.String"/>
	<field name="lop12CityCode" class="java.lang.String"/>
	<field name="lop12MaTruong" class="java.lang.String"/>
	<field name="lop12TruongName" class="java.lang.String"/>
	<field name="khuVucDongQuanCode" class="java.lang.String"/>
	<field name="khuVucNoiHocTHPTCode" class="java.lang.String"/>
	<field name="namTotNghiepTHPT" class="java.lang.String"/>
	<field name="ngayNhapNgu" class="java.lang.String"/>
	<field name="noiDongQuanCityName" class="java.lang.String"/>
	<field name="noiDongQuanWardName" class="java.lang.String"/>
	<field name="noiDongQuanChiTiet" class="java.lang.String"/>
	<field name="doiTuongUuTienCode" class="java.lang.String"/>
	<field name="soCCCD" class="java.lang.String"/>
	<field name="doiTuongSoTuyen" class="java.lang.String"/>
	<detail>
		<band height="842" splitType="Stretch">
			<property name="com.jaspersoft.studio.unit.height" value="px"/>
			<line>
				<reportElement mode="Opaque" x="72" y="64" width="90" height="1" backcolor="rgba(0, 0, 0, 0.0)" uuid="8bbf461a-e84a-4016-b467-8a2d9b74aed1"/>
			</line>
			<line>
				<reportElement mode="Opaque" x="333" y="64" width="150" height="1" backcolor="rgba(0, 0, 0, 0.0)" uuid="ad31160d-135f-4669-9409-5db37dbc4e71"/>
			</line>
			<staticText>
				<reportElement x="60" y="33" width="114" height="16" uuid="d9f03699-b5d7-4b6d-a4ad-a4d21c558a8e"/>
				<textElement textAlignment="Center" verticalAlignment="Top" markup="styled">
					<font fontName="Times New Roman" size="12" isBold="false" isItalic="false" isUnderline="false" isStrikeThrough="false"/>
				</textElement>
				<text><![CDATA[BỘ QUỐC PHÒNG]]></text>
			</staticText>
			<staticText>
				<reportElement x="279" y="33" width="278" height="16" uuid="c83e80d5-6ecb-461a-9431-b408bac4413a"/>
				<textElement textAlignment="Center" verticalAlignment="Top" markup="styled">
					<font fontName="Times New Roman" size="12" isBold="true" isItalic="false" isUnderline="false" isStrikeThrough="false"/>
				</textElement>
				<text><![CDATA[<style isBold="true">CỘNG HOÀ XÃ HỘI CHỦ NGHĨA VIỆT NAM</style>]]></text>
			</staticText>
			<staticText>
				<reportElement x="37" y="49" width="178" height="16" uuid="31d5f309-d266-4437-bad5-5e04e63c16be"/>
				<textElement textAlignment="Left" verticalAlignment="Top" markup="styled">
					<font fontName="Times New Roman" size="12" isBold="true" isItalic="false" isUnderline="false" isStrikeThrough="false"/>
				</textElement>
				<text><![CDATA[<style isBold="true">BAN TUYỂN SINH QUÂN SỰ</style>]]></text>
			</staticText>
			<staticText>
				<reportElement x="324" y="49" width="164" height="16" uuid="be31a8be-ced3-4d30-b165-4971f245cab4"/>
				<textElement textAlignment="Center" verticalAlignment="Top" markup="styled">
					<font fontName="Times New Roman" size="12" isBold="true" isItalic="false" isUnderline="false" isStrikeThrough="false"/>
				</textElement>
				<text><![CDATA[<style isBold="true">Độc lập - Tự do - Hạnh phúc</style>]]></text>
			</staticText>
			<staticText>
				<reportElement x="51" y="71" width="519" height="16" uuid="7b94dea6-d0b8-4a98-9b29-fa884362f33d"/>
				<textElement textAlignment="Left" verticalAlignment="Top">
					<font fontName="Times New Roman" size="12" isBold="true" isItalic="false" isUnderline="false" isStrikeThrough="false"/>
				</textElement>
				<text><![CDATA[PHIẾU ĐĂNG KÝ XÉT TUYỂN TRUNG CẤP QUÂN SỰ NĂM 2026]]></text>
			</staticText>
			<staticText>
				<reportElement x="38" y="93" width="72" height="15" uuid="d475fb11-a218-4b29-84f2-95f6722194b7"/>
				<textElement textAlignment="Left" verticalAlignment="Top" markup="styled">
					<font fontName="Times New Roman" size="11" isBold="true" isItalic="false" isUnderline="false" isStrikeThrough="false"/>
				</textElement>
				<text><![CDATA[<style isBold="true">1- Số phiếu:</style>]]></text>
			</staticText>
			<staticText>
				<reportElement x="96" y="93" width="336" height="15" uuid="3f1cedc4-3599-40d8-975f-7b1a945f585d"/>
				<textElement textAlignment="Left" verticalAlignment="Top" markup="styled">
					<font fontName="Times New Roman" size="10" isBold="false" isItalic="true" isUnderline="false" isStrikeThrough="false"/>
				</textElement>
				<text><![CDATA[<style isItalic="true">(Thí sinh không tự ghi mục này. Khi thu phiếu, trước khi đánh số phiếu, các đơn vị</style>]]></text>
			</staticText>
			<staticText>
				<reportElement x="38" y="106" width="177" height="15" uuid="5761b65d-81a7-46e7-9869-39d2397bcba3"/>
				<textElement textAlignment="Left" verticalAlignment="Top">
					<font fontName="Times New Roman" size="10" isBold="false" isItalic="true" isUnderline="false" isStrikeThrough="false"/>
				</textElement>
				<text><![CDATA[cần đọc kỹ hướng dẫn của Ban TSQSBQP)]]></text>
			</staticText>
			<staticText>
				<reportElement x="37" y="119" width="215" height="15" uuid="e9113ba9-b128-465d-ba67-8cda6ab9c917"/>
				<textElement textAlignment="Left" verticalAlignment="Top" markup="styled">
					<font fontName="Times New Roman" size="11" isBold="true" isItalic="false" isUnderline="false" isStrikeThrough="false"/>
				</textElement>
				<text><![CDATA[<style isBold="true">2- Nơi nộp hồ sơ đăng ký sơ tuyển (ĐKST):</style>]]></text>
			</staticText>
			<staticText>
				<reportElement x="38" y="134" width="228" height="15" uuid="e44d345a-8999-4e92-a110-b21f903eef14"/>
				<textElement textAlignment="Left" verticalAlignment="Top" markup="styled">
					<font fontName="Times New Roman" size="11" isBold="true" isItalic="false" isUnderline="false" isStrikeThrough="false"/>
				</textElement>
				<text><![CDATA[<style isBold="true">Tỉnh (thành phố, QK, QĐ, QC, BC, TC,...): </style>]]></text>
			</staticText>
			<staticText>
				<reportElement x="38" y="151" width="120" height="15" uuid="a0f11198-4a76-4ae0-831c-998e7f0c9b2d"/>
				<textElement textAlignment="Left" verticalAlignment="Top" markup="styled">
					<font fontName="Times New Roman" size="11" isBold="true" isItalic="false" isUnderline="false" isStrikeThrough="false"/>
				</textElement>
				<text><![CDATA[<style isBold="true">Xã (phường, đặc khu): </style>]]></text>
			</staticText>
			<staticText>
				<reportElement positionType="Float" x="38" y="167" width="394" height="15" uuid="531c1e4f-448b-4108-9218-3fda126cabf2"/>
				<textElement textAlignment="Left" verticalAlignment="Top" markup="styled">
					<font fontName="Times New Roman" size="11" isBold="true" isItalic="false" isUnderline="false" isStrikeThrough="false"/>
				</textElement>
				<text><![CDATA[<style isBold="true">3- Trường ĐKST và đăng ký xét tuyển nguyện vọng 1 (nguyện vọng cao nhất):</style>]]></text>
			</staticText>
			<staticText>
				<reportElement positionType="Float" x="392" y="167" width="165" height="15" uuid="d4cede00-8f90-4c56-b5cc-39cea51e3bb7"/>
				<textElement textAlignment="Left" verticalAlignment="Top" markup="styled">
					<font fontName="Times New Roman" size="11" isBold="false" isItalic="true" isUnderline="false" isStrikeThrough="false"/>
				</textElement>
				<text><![CDATA[<style isItalic="true">(Trước khi ghi, xem kỹ hướng dẫn</style>]]></text>
			</staticText>
			<staticText>
				<reportElement x="38" y="180" width="163" height="15" uuid="755ff06a-55fe-436c-a003-d63fb0c2bd48"/>
				<textElement textAlignment="Left" verticalAlignment="Top">
					<font fontName="Times New Roman" size="11" isBold="false" isItalic="true" isUnderline="false" isStrikeThrough="false"/>
				</textElement>
				<text><![CDATA[tại mục IV, mặt sau phiếu ĐK-01C)]]></text>
			</staticText>
			<staticText>
				<reportElement x="38" y="195" width="61" height="15" uuid="4fa2b791-1dfc-49a4-a768-2b516a458d73"/>
				<textElement textAlignment="Left" verticalAlignment="Top" markup="styled">
					<font fontName="Times New Roman" size="11" isBold="false" isItalic="false" isUnderline="false" isStrikeThrough="false"/>
				</textElement>
				<text><![CDATA[- Tên trường:]]></text>
			</staticText>
			<staticText>
				<reportElement x="110" y="208" width="73" height="15" uuid="072ad49b-a137-4652-a232-ff77765b4a41"/>
				<textElement textAlignment="Left" verticalAlignment="Top">
					<font fontName="Times New Roman" size="11" isBold="false" isItalic="true" isUnderline="false" isStrikeThrough="false"/>
				</textElement>
				<text><![CDATA[Ký hiệu trường]]></text>
			</staticText>
			<staticText>
				<reportElement x="38" y="235" width="165" height="15" uuid="71286cdc-7bf4-4bc6-b1d6-beb9a6035f85">
					<property name="com.jaspersoft.studio.unit.width" value="px"/>
				</reportElement>
				<textElement textAlignment="Left" verticalAlignment="Top" markup="styled">
					<font fontName="Times New Roman" size="11" isBold="false" isItalic="false" isUnderline="false" isStrikeThrough="false"/>
				</textElement>
			</staticText>
			<staticText>
				<reportElement x="38" y="251" width="120" height="15" uuid="76bbb3d7-7ae4-413a-8f6b-85b457a8b51a"/>
				<textElement textAlignment="Left" verticalAlignment="Top" markup="styled">
					<font fontName="Times New Roman" size="11" isBold="true" isItalic="false" isUnderline="false" isStrikeThrough="false"/>
				</textElement>
				<text><![CDATA[<style isBold="true">4- Họ, chữ đệm và tên:</style>]]></text>
			</staticText>
			<staticText>
				<reportElement x="142" y="252" width="202" height="15" uuid="92de4088-77b2-4216-ac89-14ef421178cb"/>
				<textElement textAlignment="Left" verticalAlignment="Top" markup="styled">
					<font fontName="Times New Roman" size="10" isBold="false" isItalic="true" isUnderline="false" isStrikeThrough="false"/>
				</textElement>
				<text><![CDATA[<style isItalic="true">(viết chữ in hoa có dấu, đúng như giấy khai sinh)</style>]]></text>
			</staticText>
			<staticText>
				<reportElement x="388" y="250" width="53" height="15" uuid="33722e0d-b64d-4a02-809f-1758a31e6bbc"/>
				<textElement textAlignment="Left" verticalAlignment="Top" markup="styled">
					<font fontName="Times New Roman" size="11" isBold="true" isItalic="false" isUnderline="false" isStrikeThrough="false"/>
				</textElement>
				<text><![CDATA[<style isBold="true">Giới tính:</style>]]></text>
			</staticText>
			<staticText>
				<reportElement x="441" y="250" width="92" height="15" uuid="09325887-4bd9-4885-8902-5f33b08dac45"/>
				<textElement textAlignment="Left" verticalAlignment="Top" markup="styled">
					<font fontName="Times New Roman" size="10" isBold="false" isItalic="true" isUnderline="false" isStrikeThrough="false"/>
				</textElement>
				<text><![CDATA[<style isItalic="true">Nữ ghi 1, Nam ghi 0</style>]]></text>
			</staticText>
			<staticText>
				<reportElement x="38" y="281" width="214" height="15" uuid="ffdfe7e8-1933-40e8-aa00-c563265b9957"/>
				<textElement textAlignment="Left" verticalAlignment="Top" markup="styled">
					<font fontName="Times New Roman" size="11" isBold="true" isItalic="false" isUnderline="false" isStrikeThrough="false"/>
				</textElement>
				<text><![CDATA[<style isBold="true">5- Ngày, tháng và 2 số cuối của năm sinh:</style>]]></text>
			</staticText>
			<staticText>
				<reportElement x="38" y="294" width="228" height="15" uuid="a4f918b5-806d-43a7-ad14-3b4d9a6cc2d1"/>
				<textElement textAlignment="Left" verticalAlignment="Top">
					<font fontName="Times New Roman" size="11" isBold="false" isItalic="true" isUnderline="false" isStrikeThrough="false"/>
				</textElement>
				<text><![CDATA[(Nếu ngày, tháng nhỏ hơn 10 ghi số 0 trong ô đầu)]]></text>
			</staticText>
			<staticText>
				<reportElement x="38" y="309" width="131" height="15" uuid="4f15635a-d773-4274-954d-fd7eabe39f3a">
					<property name="com.jaspersoft.studio.unit.width" value="px"/>
				</reportElement>
				<textElement textAlignment="Left" verticalAlignment="Top" markup="styled">
					<font fontName="Times New Roman" size="11" isBold="true" isItalic="false" isUnderline="false" isStrikeThrough="false"/>
				</textElement>
				<text><![CDATA[<style isBold="true">6- Nơi đăng ký khai sinh:</style>]]></text>
			</staticText>
			<staticText>
				<reportElement x="38" y="322" width="143" height="15" uuid="56edb55b-f8c7-4a0a-9bc9-46404a462d5a"/>
				<textElement textAlignment="Left" verticalAlignment="Top" markup="styled">
					<font fontName="Times New Roman" size="11" isBold="true" isItalic="false" isUnderline="false" isStrikeThrough="false"/>
				</textElement>
				<text><![CDATA[<style isBold="true">7- Nơi đăng ký thường trú:</style>]]></text>
			</staticText>
			<staticText>
				<reportElement x="38" y="348" width="61" height="15" uuid="e68380ae-4a3a-479a-9efa-532798e381ca"/>
				<textElement textAlignment="Left" verticalAlignment="Top" markup="styled">
					<font fontName="Times New Roman" size="11" isBold="true" isItalic="false" isUnderline="false" isStrikeThrough="false"/>
				</textElement>
				<text><![CDATA[<style isBold="true">8- Dân tộc:</style>]]></text>
			</staticText>
			<staticText>
				<reportElement x="91" y="349" width="183" height="13" uuid="4a5804f1-75eb-40fe-bfdc-d146676ba804"/>
				<textElement textAlignment="Left" verticalAlignment="Top" markup="styled">
					<font fontName="Times New Roman" size="10" isBold="false" isItalic="false" isUnderline="false" isStrikeThrough="false"/>
				</textElement>
				<text><![CDATA[Ghi theo hướng dẫn phía sau phiếu ĐK 01-C]]></text>
			</staticText>
			<staticText>
				<reportElement x="38" y="361" width="72" height="15" uuid="b6242e10-f877-4707-950b-278655e32f34"/>
				<textElement textAlignment="Left" verticalAlignment="Top" markup="styled">
					<font fontName="Times New Roman" size="11" isBold="true" isItalic="false" isUnderline="false" isStrikeThrough="false"/>
				</textElement>
				<text><![CDATA[<style isBold="true">9- Tôn giáo:</style>]]></text>
			</staticText>
			<staticText>
				<reportElement x="98" y="362" width="181" height="13" uuid="9768c110-2729-4b04-a9fa-56412c3e861d"/>
				<textElement textAlignment="Left" verticalAlignment="Top" markup="styled">
					<font fontName="Times New Roman" size="10" isBold="false" isItalic="false" isUnderline="false" isStrikeThrough="false"/>
				</textElement>
				<text><![CDATA[Ghi theo hướng dẫn phía sau phiếu ĐK 01-C]]></text>
			</staticText>
			<staticText>
				<reportElement x="38" y="375" width="108" height="15" uuid="fb63a6fd-4ba6-4a54-be75-4afdd5de5bed"/>
				<textElement textAlignment="Left" verticalAlignment="Top" markup="styled">
					<font fontName="Times New Roman" size="11" isBold="true" isItalic="false" isUnderline="false" isStrikeThrough="false"/>
				</textElement>
				<text><![CDATA[<style isBold="true">10- Nơi học THPT:</style>]]></text>
			</staticText>
			<staticText>
				<reportElement x="128" y="375" width="424" height="15" uuid="1bd99dec-cae1-4331-bff6-fa2852ab4aa4"/>
				<textElement textAlignment="Left" verticalAlignment="Top" markup="styled">
					<font fontName="Times New Roman" size="10" isBold="false" isItalic="true" isUnderline="false" isStrikeThrough="false"/>
				</textElement>
				<text><![CDATA[<style isItalic="true">(Ghi rõ tên trường và địa chỉ của trường: Xã (phường, đặc khu), tỉnh (thành phố) vào đường kẻ chấm;</style>]]></text>
			</staticText>
			<staticText>
				<reportElement x="38" y="387" width="262" height="15" uuid="31e88269-40e1-4c9b-ac7c-7b2f91dbb4c7"/>
				<textElement textAlignment="Left" verticalAlignment="Top">
					<font fontName="Times New Roman" size="10" isBold="false" isItalic="true" isUnderline="false" isStrikeThrough="false"/>
				</textElement>
				<text><![CDATA[ghi mã tỉnh của trường và mã trường vào ô mã).]]></text>
			</staticText>
			<staticText>
				<reportElement x="38" y="400" width="60" height="15" uuid="f4224179-3768-4604-aad3-c6b8636789b2"/>
				<textElement textAlignment="Left" verticalAlignment="Top">
					<font fontName="Times New Roman" size="11" isBold="false" isItalic="false" isUnderline="false" isStrikeThrough="false"/>
				</textElement>
				<text><![CDATA[Năm lớp 10:]]></text>
			</staticText>
			<staticText>
				<reportElement x="38" y="415" width="60" height="15" uuid="ae23767a-a5c5-499b-abaa-5753fd47bd59"/>
				<textElement textAlignment="Left" verticalAlignment="Top">
					<font fontName="Times New Roman" size="11" isBold="false" isItalic="false" isUnderline="false" isStrikeThrough="false"/>
				</textElement>
				<text><![CDATA[Năm lớp 11:]]></text>
			</staticText>
			<staticText>
				<reportElement x="38" y="430" width="60" height="15" uuid="bcf37391-9969-4cfc-80a1-6e7676ebecb1"/>
				<textElement textAlignment="Left" verticalAlignment="Top">
					<font fontName="Times New Roman" size="11" isBold="false" isItalic="false" isUnderline="false" isStrikeThrough="false"/>
				</textElement>
				<text><![CDATA[Năm lớp 12:]]></text>
			</staticText>
			<staticText>
				<reportElement x="38" y="444" width="214" height="15" uuid="1a506922-8e3d-4804-86e1-25c4f7cee54a">
					<property name="com.jaspersoft.studio.unit.width" value="px"/>
				</reportElement>
				<textElement textAlignment="Left" verticalAlignment="Top">
					<font fontName="Times New Roman" size="11" isBold="true" isItalic="false" isUnderline="false" isStrikeThrough="false"/>
				</textElement>
				<text><![CDATA[11- Nơi học THPT thuộc khu vực ưu tiên:]]></text>
			</staticText>
			<staticText>
				<reportElement x="38" y="457" width="143" height="15" uuid="4b27b3b0-2215-45ce-b03d-ab20be08dcb9"/>
				<textElement textAlignment="Left" verticalAlignment="Top" markup="styled">
					<font fontName="Times New Roman" size="11" isBold="true" isItalic="false" isUnderline="false" isStrikeThrough="false"/>
				</textElement>
				<text><![CDATA[<style isBold="true">12- Năm tốt nghiệp THPT:</style>]]></text>
			</staticText>
			<staticText>
				<reportElement positionType="Float" x="162" y="457" width="204" height="15" uuid="ca8498e3-3976-4138-9b62-f3288c972fd6"/>
				<textElement textAlignment="Left" verticalAlignment="Top" markup="styled">
					<font fontName="Times New Roman" size="10" isBold="false" isItalic="true" isUnderline="false" isStrikeThrough="false"/>
				</textElement>
				<text><![CDATA[<style isItalic="true">(Ghi đủ 4 chữ số của năm tốt nghiệp vào ô).</style>]]></text>
			</staticText>
			<staticText>
				<reportElement x="38" y="497" width="322" height="15" uuid="ff573d03-c746-4f7d-be66-5a70b2ab5e67"/>
				<textElement textAlignment="Left" verticalAlignment="Top" markup="styled">
					<font fontName="Times New Roman" size="11" isBold="true" isItalic="false" isUnderline="false" isStrikeThrough="false"/>
				</textElement>
				<text><![CDATA[<style isBold="true">13- Ưu tiên khu vực theo nơi đóng quân của quân nhân (nếu có)</style>]]></text>
			</staticText>
			<staticText>
				<reportElement x="37" y="470" width="97" height="15" uuid="4068136e-e182-4bb9-b82b-b15c5f1ea7e2"/>
				<textElement textAlignment="Left" verticalAlignment="Top">
					<font fontName="Times New Roman" size="11" isBold="false" isItalic="true" isUnderline="false" isStrikeThrough="false"/>
				</textElement>
				<text><![CDATA[Tháng, năm nhập ngũ]]></text>
			</staticText>
			<staticText>
				<reportElement x="38" y="511" width="130" height="15" uuid="c6f8b69c-3a95-4719-bd52-958970f664f5"/>
				<textElement textAlignment="Left" verticalAlignment="Top" markup="styled">
					<font fontName="Times New Roman" size="11" isBold="true" isItalic="false" isUnderline="false" isStrikeThrough="false"/>
				</textElement>
				<text><![CDATA[<style isBold="true">14- Đối tượng ưu tiên:</style>]]></text>
			</staticText>
			<staticText>
				<reportElement x="140" y="512" width="411" height="15" uuid="1d06d9dc-e15b-4ad9-9e2d-4974d4bceccd"/>
				<textElement textAlignment="Left" verticalAlignment="Top" markup="styled">
					<font fontName="Times New Roman" size="10" isBold="false" isItalic="true" isUnderline="false" isStrikeThrough="false"/>
				</textElement>
				<text><![CDATA[<style isItalic="true">Thí sinh thuộc đối tượng ưu tiên nào, thì ghi vào 2 ô mã, ký hiệu của đối tượng đó.</style>]]></text>
			</staticText>
			<staticText>
				<reportElement x="38" y="525" width="177" height="15" uuid="fc9a1a4d-c46d-48c2-ae6d-cf728d18f713"/>
				<textElement textAlignment="Left" verticalAlignment="Top">
					<font fontName="Times New Roman" size="10" isBold="false" isItalic="true" isUnderline="false" isStrikeThrough="false"/>
				</textElement>
				<text><![CDATA[Nếu không thuộc diện ưu tiên thì để trống).]]></text>
			</staticText>
			<staticText>
				<reportElement x="38" y="537" width="300" height="15" uuid="8b28b40c-dffb-47a2-8d6b-2e4c56903c8b"/>
				<textElement textAlignment="Left" verticalAlignment="Top" markup="styled">
					<font fontName="Times New Roman" size="11" isBold="true" isItalic="false" isUnderline="false" isStrikeThrough="false"/>
				</textElement>
				<text><![CDATA[<style isBold="true">15- Thẻ Căn cước công dân (hoặc Số định danh cá nhân) số:</style>]]></text>
			</staticText>
			<staticText>
				<reportElement x="301" y="538" width="93" height="15" uuid="d5b85a58-8d46-491f-8b3a-7fa467c63cca"/>
				<textElement textAlignment="Left" verticalAlignment="Top" markup="styled">
					<font fontName="Times New Roman" size="10" isBold="false" isItalic="true" isUnderline="false" isStrikeThrough="false"/>
				</textElement>
				<text><![CDATA[<style isItalic="true">(Ghi mỗi số vào 1 ô)</style>]]></text>
			</staticText>
			<staticText>
				<reportElement x="38" y="573" width="131" height="15" uuid="69119191-30c7-438d-a8c4-105c08d65e13"/>
				<textElement textAlignment="Left" verticalAlignment="Top" markup="styled">
					<font fontName="Times New Roman" size="11" isBold="true" isItalic="false" isUnderline="false" isStrikeThrough="false"/>
				</textElement>
				<text><![CDATA[<style isBold="true">16- Đối tượng sơ tuyển:</style>]]></text>
			</staticText>
			<staticText>
				<reportElement x="146" y="573" width="172" height="15" uuid="f1b8afd8-5749-4e6f-8944-01800345ee2a"/>
				<textElement textAlignment="Left" verticalAlignment="Top" markup="styled">
					<font fontName="Times New Roman" size="10" isBold="false" isItalic="true" isUnderline="false" isStrikeThrough="false"/>
				</textElement>
				<text><![CDATA[<style isItalic="true">(Thanh niên ghi số 0; quân nhân ghi số 1).</style>]]></text>
			</staticText>
			<staticText>
				<reportElement x="38" y="586" width="252" height="15" uuid="4a199895-2e39-47f5-ad6d-909859867e21"/>
				<textElement textAlignment="Left" verticalAlignment="Top" markup="styled">
					<font fontName="Times New Roman" size="11" isBold="true" isItalic="false" isUnderline="false" isStrikeThrough="false"/>
				</textElement>
				<text><![CDATA[<style isBold="true">17- Cam đoan về hồ sơ và lời hứa khi trúng tuyển:</style>]]></text>
			</staticText>
			<staticText>
				<reportElement x="38" y="646" width="52" height="16" uuid="e1a73e1a-c64d-42c8-a608-82b3ed190ae6"/>
				<textElement textAlignment="Left" verticalAlignment="Top" markup="styled">
					<font fontName="Times New Roman" size="12" isBold="true" isItalic="true" isUnderline="false" isStrikeThrough="false"/>
				</textElement>
				<text><![CDATA[<style isBold="true" isItalic="true">Ghi chú:</style>]]></text>
			</staticText>
			<staticText>
				<reportElement x="84" y="648" width="184" height="13" uuid="5d883f50-e90f-4257-89da-9bc2f28bad1c"/>
				<textElement textAlignment="Left" verticalAlignment="Top" markup="styled">
					<font fontName="Times New Roman" size="9" isBold="false" isItalic="true" isUnderline="false" isStrikeThrough="false"/>
				</textElement>
				<text><![CDATA[<style isItalic="true">Sau ngày xét tuyển, mọi yêu cầu sửa đổi, nội</style>]]></text>
			</staticText>
			<staticText>
				<reportElement x="38" y="660" width="155" height="13" uuid="1da231cc-8239-4564-b7c8-b5bc4e2b32ac"/>
				<textElement textAlignment="Left" verticalAlignment="Top" markup="styled">
					<font fontName="Times New Roman" size="9" isBold="false" isItalic="true" isUnderline="false" isStrikeThrough="false"/>
				</textElement>
				<text><![CDATA[<style isItalic="true">dung lời khai sẽ không có giá trị.</style>]]></text>
			</staticText>
			<staticText>
				<reportElement x="38" y="672" width="214" height="13" uuid="139f0d60-67ed-4907-b42b-97b2c2f620fa"/>
				<textElement textAlignment="Left" verticalAlignment="Top" markup="styled">
					<font fontName="Times New Roman" size="9" isBold="false" isItalic="true" isUnderline="false" isStrikeThrough="false"/>
				</textElement>
				<text><![CDATA[<style isItalic="true">- Địa chỉ liên lạc:...............................................................</style>]]></text>
			</staticText>
			<staticText>
				<reportElement x="38" y="685" width="214" height="13" uuid="69bf0045-b15a-4578-8d61-3dfc715071d3"/>
				<textElement textAlignment="Left" verticalAlignment="Top" markup="styled">
					<font fontName="Times New Roman" size="9" isBold="false" isItalic="true" isUnderline="false" isStrikeThrough="false"/>
				</textElement>
				<text><![CDATA[- Điện thoại:.......................................................................]]></text>
			</staticText>
			<staticText>
				<reportElement x="351" y="646" width="164" height="16" uuid="390db864-7954-4cc5-9af6-e58170b66199"/>
				<textElement textAlignment="Left" verticalAlignment="Top" markup="styled">
					<font fontName="Times New Roman" size="12" isBold="true" isItalic="false" isUnderline="false" isStrikeThrough="false"/>
				</textElement>
				<text><![CDATA[<style isBold="true">Xác nhận người khai phiếu này</style>]]></text>
			</staticText>
			<staticText>
				<reportElement x="294" y="662" width="256" height="13" uuid="047e393e-5f24-4faa-a8b3-4c0377f297ad"/>
				<textElement textAlignment="Left" verticalAlignment="Top" markup="styled">
					<font fontName="Times New Roman" size="9" isBold="false" isItalic="false" isUnderline="false" isStrikeThrough="false"/>
				</textElement>
				<text><![CDATA[Ban TSQS xã, phường, đặc khu (đối với thanh niên ngoài Quân đội)]]></text>
			</staticText>
			<staticText>
				<reportElement x="294" y="675" width="257" height="13" uuid="cf75006a-4e0d-41ed-b6c5-54c18d8e7de8"/>
				<textElement textAlignment="Left" verticalAlignment="Top" markup="styled">
					<font fontName="Times New Roman" size="9" isBold="false" isItalic="false" isUnderline="false" isStrikeThrough="false"/>
				</textElement>
				<text><![CDATA[đơn vị (đối với quân nhân đang tại ngũ):…............................................]]></text>
			</staticText>
			<staticText>
				<reportElement x="294" y="689" width="255" height="13" uuid="e48911b5-33d9-4445-93d7-289616d99b92"/>
				<textElement textAlignment="Left" verticalAlignment="Top" markup="styled">
					<font fontName="Times New Roman" size="9" isBold="false" isItalic="false" isUnderline="false" isStrikeThrough="false"/>
				</textElement>
				<text><![CDATA[………………………xác nhận thí sinh …........…....…........................]]></text>
			</staticText>
			<staticText>
				<reportElement x="294" y="703" width="256" height="13" uuid="0104c442-eef7-40ad-8ead-6c9533c71ded"/>
				<textElement textAlignment="Left" verticalAlignment="Top" markup="styled">
					<font fontName="Times New Roman" size="9" isBold="false" isItalic="false" isUnderline="false" isStrikeThrough="false"/>
				</textElement>
				<text><![CDATA[đang thường trú tại địa phương (hoặc đang tại ngũ tại đơn vị):]]></text>
			</staticText>
			<staticText>
				<reportElement x="367" y="716" width="183" height="13" uuid="ec76d526-9286-41c9-81c3-8138d858a4b1"/>
				<textElement textAlignment="Left" verticalAlignment="Top">
					<font fontName="Times New Roman" size="9" isBold="false" isItalic="false" isUnderline="false" isStrikeThrough="false"/>
				</textElement>
				<text><![CDATA[………………………………………………………………….]]></text>
			</staticText>
			<staticText>
				<reportElement x="367" y="729" width="183" height="13" uuid="82be3aa9-7d3b-4ec5-9844-2562d13bfa08"/>
				<textElement textAlignment="Left" verticalAlignment="Top" markup="styled">
					<font fontName="Times New Roman" size="9" isBold="false" isItalic="false" isUnderline="false" isStrikeThrough="false"/>
				</textElement>
				<text><![CDATA[………………………………………………………………….]]></text>
			</staticText>
			<staticText>
				<reportElement x="424" y="753" width="74" height="13" uuid="1783bc6b-f48f-4b44-b694-deaadbaf4512"/>
				<textElement textAlignment="Left" verticalAlignment="Top" markup="styled">
					<font fontName="Times New Roman" size="9" isBold="false" isItalic="false" isUnderline="false" isStrikeThrough="false"/>
				</textElement>
				<text><![CDATA[(Ký tên, đóng dấu)]]></text>
			</staticText>
			<staticText>
				<reportElement x="49" y="713" width="77" height="13" uuid="039151b6-7cf7-4cef-998d-87ab8d235200"/>
				<textElement textAlignment="Left" verticalAlignment="Top" markup="styled">
					<font fontName="Times New Roman" size="9" isBold="true" isItalic="false" isUnderline="false" isStrikeThrough="false"/>
				</textElement>
				<text><![CDATA[<style isBold="true">Thí sinh dự tuyển</style>]]></text>
			</staticText>
			<staticText>
				<reportElement x="50" y="726" width="74" height="13" uuid="b7fb67d5-a9e1-4005-ba16-cd2988783cae"/>
				<textElement textAlignment="Left" verticalAlignment="Top">
					<font fontName="Times New Roman" size="9" isBold="false" isItalic="false" isUnderline="false" isStrikeThrough="false"/>
				</textElement>
				<text><![CDATA[(Ký, ghi rõ họ tên)]]></text>
			</staticText>
			<staticText>
				<reportElement x="175" y="699" width="74" height="13" uuid="85d1990b-6a93-4011-9bcf-43fffa399982"/>
				<textElement textAlignment="Left" verticalAlignment="Top" markup="styled">
					<font fontName="Times New Roman" size="9" isBold="true" isItalic="false" isUnderline="false" isStrikeThrough="false"/>
				</textElement>
				<text><![CDATA[<style isBold="true">Người thu hồ sơ</style>]]></text>
			</staticText>
			<staticText>
				<reportElement x="159" y="713" width="112" height="13" uuid="355b7e5c-58a6-4549-8776-f91e836c072f"/>
				<textElement textAlignment="Left" verticalAlignment="Top" markup="styled">
					<font fontName="Times New Roman" size="9" isBold="false" isItalic="false" isUnderline="false" isStrikeThrough="false"/>
				</textElement>
				<text><![CDATA[(Ký, ghi rõ họ tên, cấp bậc)]]></text>
			</staticText>
			<rectangle>
				<reportElement x="454" y="93" width="26" height="15" uuid="6cc426ab-a94a-4a11-9ab5-c40742dd13a5"/>
			</rectangle>
			<rectangle>
				<reportElement x="266" y="221" width="24" height="15" uuid="59686924-0b6b-4ae9-957e-767b689b06ab"/>
			</rectangle>
			<rectangle>
				<reportElement x="290" y="221" width="24" height="15" uuid="142071e0-52c3-41cb-a8ae-32758a6ea349"/>
			</rectangle>
			<rectangle>
				<reportElement x="314" y="221" width="24" height="15" uuid="48594848-007b-4329-9d47-a0226a997787"/>
			</rectangle>
			<rectangle>
				<reportElement x="338" y="221" width="24" height="15" uuid="380f6e90-f5bf-4bb4-8687-b24a4491477b"/>
			</rectangle>
			<rectangle>
				<reportElement x="362" y="221" width="24" height="15" uuid="221638df-3a08-47d3-b951-61e2ca4032f4"/>
			</rectangle>
			<rectangle>
				<reportElement x="386" y="221" width="24" height="15" uuid="5796f30d-569b-472e-8f89-94e44afff904"/>
			</rectangle>
			<rectangle>
				<reportElement x="410" y="221" width="24" height="15" uuid="180d955a-fbe2-48d3-9619-05fa14c08f2b"/>
			</rectangle>
			<rectangle>
				<reportElement x="434" y="221" width="24" height="15" uuid="a5f22309-d086-41a7-a541-1bf4289eb348"/>
			</rectangle>
			<rectangle>
				<reportElement x="158" y="221" width="24" height="15" uuid="b34280a3-a817-4f02-a5dd-a76f995230ea"/>
			</rectangle>
			<rectangle>
				<reportElement x="110" y="221" width="24" height="15" uuid="35235d91-a7cc-4bc3-8c37-b1d2e8fd3e51"/>
			</rectangle>
			<rectangle>
				<reportElement x="134" y="221" width="24" height="15" uuid="12597336-2ead-4ea7-9d45-10d2efc64e13"/>
			</rectangle>
			<rectangle>
				<reportElement x="538" y="250" width="20" height="15" uuid="8ab07409-87bb-49b9-9dd7-a0f251ddcf79"/>
			</rectangle>
			<rectangle>
				<reportElement x="386" y="281" width="24" height="15" uuid="f3db7992-cc92-40f6-8710-848a872749a5"/>
			</rectangle>
			<rectangle>
				<reportElement x="410" y="281" width="24" height="15" uuid="b6b2d694-f0fb-423b-bcce-fc5a0bf19e38"/>
			</rectangle>
			<rectangle>
				<reportElement x="447" y="281" width="24" height="15" uuid="c527ac14-dcf8-49f2-92ee-de3e7c8fee09"/>
			</rectangle>
			<rectangle>
				<reportElement x="471" y="281" width="24" height="15" uuid="bbfcf83f-adcf-474c-b0d9-28e37a8c0c6c"/>
			</rectangle>
			<rectangle>
				<reportElement x="509" y="281" width="24" height="15" uuid="236574d0-ff2e-4494-9cfd-f2e7e2a80c5a"/>
			</rectangle>
			<rectangle>
				<reportElement x="533" y="281" width="24" height="15" uuid="21b764eb-44e1-4388-abfd-a092c65145d4"/>
			</rectangle>
			<staticText>
				<reportElement x="398" y="296" width="26" height="12" uuid="b561ee7a-17a5-426d-9c23-b4cc9577f8dd"/>
				<textElement textAlignment="Left" verticalAlignment="Top">
					<font fontName="Times New Roman" size="9" isBold="false" isItalic="true" isUnderline="false" isStrikeThrough="false"/>
				</textElement>
				<text><![CDATA[Ngày]]></text>
			</staticText>
			<staticText>
				<reportElement x="458" y="296" width="33" height="12" uuid="e6cbdbdd-e103-4111-8ca3-cd83f7ac5ded"/>
				<textElement textAlignment="Left" verticalAlignment="Top">
					<font fontName="Times New Roman" size="9" isBold="false" isItalic="true" isUnderline="false" isStrikeThrough="false"/>
				</textElement>
				<text><![CDATA[Tháng]]></text>
			</staticText>
			<staticText>
				<reportElement x="523" y="295" width="20" height="13" uuid="f57426c1-4974-418f-8e66-df9ecea100df"/>
				<textElement textAlignment="Left" verticalAlignment="Top">
					<font fontName="Times New Roman" size="9" isBold="false" isItalic="true" isUnderline="false" isStrikeThrough="false"/>
				</textElement>
				<text><![CDATA[Năm]]></text>
			</staticText>
			<rectangle>
				<reportElement x="510" y="322" width="24" height="15" uuid="9ed27539-42fc-4364-8864-2fa9a43d2d04"/>
			</rectangle>
			<rectangle>
				<reportElement x="534" y="322" width="24" height="15" uuid="b182f456-becf-4775-a8da-535d57b26db8"/>
			</rectangle>
			<staticText>
				<reportElement x="490" y="338" width="28" height="12" uuid="30c75054-1880-44e9-a575-b4b3a4129ba6"/>
				<textElement textAlignment="Left" verticalAlignment="Top">
					<font fontName="Times New Roman" size="9" isBold="false" isItalic="true" isUnderline="false" isStrikeThrough="false"/>
				</textElement>
				<text><![CDATA[Mã xã]]></text>
			</staticText>
			<rectangle>
				<reportElement x="486" y="322" width="24" height="15" uuid="1b6b1522-bea1-49fe-ab16-9050c128101c"/>
			</rectangle>
			<rectangle>
				<reportElement x="462" y="322" width="24" height="15" uuid="d4874a61-5eca-4e4a-8047-301364408772"/>
			</rectangle>
			<rectangle>
				<reportElement x="438" y="322" width="24" height="15" uuid="d8860a04-d125-41a7-9dae-0bd22f91ea3e"/>
			</rectangle>
			<rectangle>
				<reportElement x="387" y="322" width="24" height="15" uuid="7a757fd5-fc01-4d43-be1f-6a19aafb9fa5"/>
			</rectangle>
			<rectangle>
				<reportElement x="411" y="322" width="24" height="15" uuid="6a73fe9b-d395-4754-8d8b-7956da159b95"/>
			</rectangle>
			<staticText>
				<reportElement x="396" y="338" width="30" height="12" uuid="fbd76933-96eb-49ff-93db-9e7a0fbd8500"/>
				<textElement textAlignment="Left" verticalAlignment="Top">
					<font fontName="Times New Roman" size="9" isBold="false" isItalic="true" isUnderline="false" isStrikeThrough="false"/>
				</textElement>
				<text><![CDATA[Mã tỉnh]]></text>
			</staticText>
			<rectangle>
				<reportElement x="517" y="347" width="41" height="14" uuid="f8500008-fbc9-4537-b3ba-dac8e1e318f3"/>
			</rectangle>
			<rectangle>
				<reportElement x="517" y="361" width="41" height="13" uuid="218f6c50-ee66-4bc9-b672-2d399b601840"/>
			</rectangle>
			<rectangle>
				<reportElement x="534" y="400" width="24" height="13" uuid="28dac546-7bad-4b89-8448-9e4a6735cb22"/>
			</rectangle>
			<rectangle>
				<reportElement x="486" y="400" width="24" height="13" uuid="37201430-a324-443a-a5a1-3d186362883a"/>
			</rectangle>
			<rectangle>
				<reportElement x="438" y="400" width="24" height="13" uuid="74f8860d-df9f-4002-b7d6-193497f4bf92"/>
			</rectangle>
			<rectangle>
				<reportElement x="510" y="400" width="24" height="13" uuid="69838b42-f34c-48cb-9200-41d6c3e1c4c5"/>
			</rectangle>
			<rectangle>
				<reportElement x="462" y="400" width="24" height="13" uuid="2aabf724-736f-4d67-99f6-e815ca988974"/>
			</rectangle>
			<rectangle>
				<reportElement x="414" y="400" width="24" height="13" uuid="a67d426f-6438-4ad9-9259-f8d7751c52c9"/>
			</rectangle>
			<rectangle>
				<reportElement x="360" y="400" width="24" height="13" uuid="884c81cf-8c7a-4abf-ae82-ea78cb90e55e"/>
			</rectangle>
			<rectangle>
				<reportElement x="384" y="400" width="24" height="13" uuid="44454c65-74d4-4d43-b11f-765facb77fa9"/>
			</rectangle>
			<rectangle>
				<reportElement x="534" y="415" width="24" height="13" uuid="36ecf883-014f-4e8c-999d-e139515ed60a"/>
			</rectangle>
			<rectangle>
				<reportElement x="486" y="415" width="24" height="13" uuid="ea0759de-56e6-48d0-8aa6-76e435318b91"/>
			</rectangle>
			<rectangle>
				<reportElement x="438" y="415" width="24" height="13" uuid="56990442-69b8-4da7-9f82-064c7ee71ed8"/>
			</rectangle>
			<rectangle>
				<reportElement x="510" y="415" width="24" height="13" uuid="a4e11224-5238-4e2a-87fe-b39ed5d64e7b"/>
			</rectangle>
			<rectangle>
				<reportElement x="462" y="415" width="24" height="13" uuid="4cf16076-b2c1-443d-9409-3c7c8ca14234"/>
			</rectangle>
			<rectangle>
				<reportElement x="414" y="415" width="24" height="13" uuid="d079e28c-55e7-4762-a996-7fe38830cec3"/>
			</rectangle>
			<rectangle>
				<reportElement x="360" y="415" width="24" height="13" uuid="a9e9912b-1d60-4bf3-9cab-78ed801e610a"/>
			</rectangle>
			<rectangle>
				<reportElement x="384" y="415" width="24" height="13" uuid="70a124b8-91e3-4834-9ee0-f2e896b24a1d"/>
			</rectangle>
			<rectangle>
				<reportElement x="534" y="430" width="24" height="13" uuid="9c930ee6-96c1-4329-b190-2555812f4dcd"/>
			</rectangle>
			<rectangle>
				<reportElement x="486" y="430" width="24" height="13" uuid="c00c7be0-cf5d-4bd6-81a9-b5a6134ae6dc"/>
			</rectangle>
			<rectangle>
				<reportElement x="438" y="430" width="24" height="13" uuid="044e7067-5157-44c9-8719-c22f23434b0e"/>
			</rectangle>
			<rectangle>
				<reportElement x="510" y="430" width="24" height="13" uuid="0f5b5a88-01e3-44ac-9a7c-6cc486306f1e"/>
			</rectangle>
			<rectangle>
				<reportElement x="462" y="430" width="24" height="13" uuid="45af883f-d629-43c7-8f11-a83b8f764ddf"/>
			</rectangle>
			<rectangle>
				<reportElement x="414" y="430" width="24" height="13" uuid="b7ced870-01de-499f-8d5a-db3ad4721773"/>
			</rectangle>
			<rectangle>
				<reportElement x="360" y="430" width="24" height="13" uuid="210d9cc6-df87-4036-847e-24374cd6f4c5"/>
			</rectangle>
			<rectangle>
				<reportElement x="384" y="430" width="24" height="13" uuid="26a04335-4c3c-4094-82eb-9443085bb0fc"/>
			</rectangle>
			<rectangle>
				<reportElement x="462" y="452" width="24" height="15" uuid="83d5fa77-b9a6-4eaa-b72e-94a59246dddd"/>
			</rectangle>
			<rectangle>
				<reportElement x="510" y="452" width="24" height="15" uuid="e4d8863f-145a-47b3-8b61-3b75021eee2a"/>
			</rectangle>
			<rectangle>
				<reportElement x="486" y="452" width="24" height="15" uuid="51a78b56-7796-441a-84fd-af19db35b321"/>
			</rectangle>
			<rectangle>
				<reportElement x="534" y="452" width="24" height="15" uuid="8a2b4bce-e761-4218-9fd3-732b488b3938"/>
			</rectangle>
			<rectangle>
				<reportElement x="533" y="526" width="24" height="15" uuid="b861b9f3-1026-4247-8c7d-4384062b1a40"/>
			</rectangle>
			<rectangle>
				<reportElement x="509" y="526" width="24" height="15" uuid="f0ea6d02-dc90-407d-a0f1-589ef71db5e6"/>
			</rectangle>
			<rectangle>
				<reportElement x="462" y="554" width="24" height="15" uuid="315721af-67d0-4dd5-b2e0-9132b6b0cfe6"/>
			</rectangle>
			<rectangle>
				<reportElement x="510" y="554" width="24" height="15" uuid="24e8f578-70c7-4d0e-84c4-2a54ee917c9c"/>
			</rectangle>
			<rectangle>
				<reportElement x="486" y="554" width="24" height="15" uuid="76bd091c-557b-431f-b996-04610632ca1f"/>
			</rectangle>
			<rectangle>
				<reportElement x="283" y="715" width="85" height="83" uuid="e171beb6-95a8-420c-afb1-88f1cf386efb">
					<property name="com.jaspersoft.studio.unit.width" value="px"/>
					<property name="com.jaspersoft.studio.unit.height" value="px"/>
				</reportElement>
			</rectangle>
			<rectangle>
				<reportElement x="438" y="554" width="24" height="15" uuid="13f16ac8-4a61-4f00-90d6-03ce832a05d9"/>
			</rectangle>
			<rectangle>
				<reportElement x="414" y="554" width="24" height="15" uuid="aafc4c61-715d-455c-aa8e-6626dd43a251"/>
			</rectangle>
			<rectangle>
				<reportElement x="534" y="554" width="24" height="15" uuid="4fdec290-ef26-4996-80c2-f8e3dfc2c56c"/>
			</rectangle>
			<rectangle>
				<reportElement x="366" y="554" width="24" height="15" uuid="33bb5974-3173-486f-aa0f-c2ea59eee519"/>
			</rectangle>
			<rectangle>
				<reportElement x="318" y="554" width="24" height="15" uuid="76d68d89-3eac-4ba0-8838-7010bc6331d2"/>
			</rectangle>
			<rectangle>
				<reportElement x="270" y="554" width="24" height="15" uuid="a318a746-79c4-4c5f-8dcc-29086fd20300"/>
			</rectangle>
			<rectangle>
				<reportElement x="342" y="554" width="24" height="15" uuid="00a1e5c8-d2b8-463d-8527-9f488ab9a655"/>
			</rectangle>
			<rectangle>
				<reportElement x="390" y="554" width="24" height="15" uuid="2c669b59-3cf9-446b-9d0e-e1d9321a0df0"/>
			</rectangle>
			<rectangle>
				<reportElement x="294" y="554" width="24" height="15" uuid="713ad18f-95f7-4a07-8fb9-17d8ddd67012"/>
			</rectangle>
			<rectangle>
				<reportElement x="534" y="571" width="24" height="15" uuid="e5f45256-81ba-4dd1-956b-c5f3d630554a"/>
			</rectangle>
			<staticText>
				<reportElement x="305" y="722" width="45" height="13" uuid="48b47ffd-ccb8-43dc-8f1d-6e1ddc305e46"/>
				<textElement textAlignment="Center" verticalAlignment="Middle" markup="styled">
					<font fontName="Times New Roman" size="9" isBold="false" isItalic="true" isUnderline="false" isStrikeThrough="false"/>
				</textElement>
				<text><![CDATA[<style isItalic="true">Ảnh 4 x 6</style>]]></text>
			</staticText>
			<staticText>
				<reportElement x="303" y="735" width="50" height="13" uuid="5cffb65c-0dc3-4f13-9b5e-21371425c402"/>
				<textElement textAlignment="Center" verticalAlignment="Middle">
					<font fontName="Times New Roman" size="9" isBold="false" isItalic="true" isUnderline="false" isStrikeThrough="false"/>
				</textElement>
				<text><![CDATA[của thí sinh]]></text>
			</staticText>
			<staticText>
				<reportElement x="303" y="749" width="50" height="13" uuid="e33cd8d8-0f3d-4d7b-8019-ffedee59a807"/>
				<textElement textAlignment="Center" verticalAlignment="Middle" markup="styled">
					<font fontName="Times New Roman" size="9" isBold="false" isItalic="true" isUnderline="false" isStrikeThrough="false"/>
				</textElement>
				<text><![CDATA[<style isItalic="true">(Đóng dấu</style>]]></text>
			</staticText>
			<staticText>
				<reportElement x="291" y="761" width="72" height="13" uuid="298371ce-c831-4909-9a33-4541530f9b12"/>
				<textElement textAlignment="Center" verticalAlignment="Middle">
					<font fontName="Times New Roman" size="9" isBold="false" isItalic="true" isUnderline="false" isStrikeThrough="false"/>
				</textElement>
				<text><![CDATA[trùm lên góc bên]]></text>
			</staticText>
			<staticText>
				<reportElement x="287" y="772" width="82" height="13" uuid="6463cd8e-3703-4368-93eb-a2f92fd4fb25"/>
				<textElement textAlignment="Center" verticalAlignment="Middle">
					<font fontName="Times New Roman" size="9" isBold="false" isItalic="true" isUnderline="false" isStrikeThrough="false"/>
				</textElement>
				<text><![CDATA[phải phía dưới ảnh)]]></text>
			</staticText>
			<rectangle>
				<reportElement x="491" y="52" width="72" height="15" uuid="ca37926c-3f55-4b1d-ae27-24c0e6dd67ac">
					<property name="com.jaspersoft.studio.unit.x" value="pixel"/>
					<property name="com.jaspersoft.studio.unit.width" value="px"/>
				</reportElement>
			</rectangle>
			<staticText>
				<reportElement x="491" y="52" width="72" height="15" uuid="c9cf77fb-0e96-445a-9111-f90ebb9e05b9">
					<property name="com.jaspersoft.studio.unit.height" value="px"/>
				</reportElement>
				<textElement textAlignment="Center" verticalAlignment="Middle" markup="styled">
					<font fontName="Times New Roman" size="9" isBold="true" isItalic="false" isUnderline="false" isStrikeThrough="false"/>
				</textElement>
				<text><![CDATA[<style isBold="true">MẪU ĐK 01 - A</style>]]></text>
			</staticText>
			<rectangle>
				<reportElement x="536" y="133" width="21" height="15" uuid="28398a35-c1aa-4f0d-8015-2843f8504874"/>
			</rectangle>
			<rectangle>
				<reportElement x="515" y="133" width="21" height="15" uuid="c3371809-19eb-4510-a9da-c06f1b4112ea"/>
			</rectangle>
			<rectangle>
				<reportElement x="536" y="151" width="21" height="15" uuid="a30afc45-8fdd-4f8a-a45a-9cf7e267dea7"/>
			</rectangle>
			<rectangle>
				<reportElement x="515" y="151" width="21" height="15" uuid="06bdbcc2-14b5-48ef-b75c-14a09535310f"/>
			</rectangle>
			<rectangle>
				<reportElement x="494" y="151" width="21" height="15" uuid="a0292d13-eff0-48d9-a77f-5f51b949e94d"/>
			</rectangle>
			<rectangle>
				<reportElement x="473" y="151" width="21" height="15" uuid="0805d19a-f935-498b-9886-85f2b9b02619"/>
			</rectangle>
			<rectangle>
				<reportElement x="452" y="151" width="21" height="15" uuid="ea9b1f98-144e-4d77-87d2-fc35e6ef30be"/>
			</rectangle>
			<textField isBlankWhenNull="true">
				<reportElement positionType="Float" x="236" y="134" width="266" height="13" uuid="65c96ea9-f0c3-4c7f-a78e-b1193fe9d154"/>
				<textElement textAlignment="Left" verticalAlignment="Middle"/>
				<textFieldExpression><![CDATA[$F{noiNopHsCityName} != null ? $F{noiNopHsCityName} : ""]]></textFieldExpression>
			</textField>
			<textField isBlankWhenNull="true">
				<reportElement positionType="Float" x="138" y="150" width="301" height="16" uuid="a4d1523a-1b80-4d82-99b2-2c3e75af94b4"/>
				<textElement textAlignment="Left" verticalAlignment="Middle"/>
				<textFieldExpression><![CDATA[$F{noiNopHsWardName} != null ? $F{noiNopHsWardName} : ""]]></textFieldExpression>
			</textField>
			<textField isBlankWhenNull="true">
				<reportElement x="514" y="133" width="22" height="14" uuid="d5af6c9b-68ec-4916-ae8f-cbcf31844c4c"/>
				<textElement textAlignment="Center" verticalAlignment="Middle"/>
				<textFieldExpression><![CDATA[$F{noiNopHsCityCode} != null && $F{noiNopHsCityCode}.length() > 0 ? String.valueOf($F{noiNopHsCityCode}.charAt(0)) : ""]]></textFieldExpression>
			</textField>
			<textField isBlankWhenNull="true">
				<reportElement x="537" y="134" width="20" height="14" uuid="d6e190ac-dbff-4b20-a905-cba8bda2401a"/>
				<textElement textAlignment="Center" verticalAlignment="Middle"/>
				<textFieldExpression><![CDATA[$F{noiNopHsCityCode} != null && $F{noiNopHsCityCode}.length() > 1 ? String.valueOf($F{noiNopHsCityCode}.charAt(1)) : ""]]></textFieldExpression>
			</textField>
			<textField isBlankWhenNull="true">
				<reportElement x="453" y="151" width="20" height="14" uuid="54313668-19fc-43f9-b981-265949377598"/>
				<textElement textAlignment="Center" verticalAlignment="Middle"/>
				<textFieldExpression><![CDATA[$F{noiNopHsWardCode} != null && $F{noiNopHsWardCode}.length() > 0 ? String.valueOf($F{noiNopHsWardCode}.charAt(0)) : ""]]></textFieldExpression>
			</textField>
			<textField isBlankWhenNull="true">
				<reportElement x="473" y="151" width="20" height="14" uuid="91c52735-b737-459a-a1f0-98fab3049015"/>
				<textElement textAlignment="Center" verticalAlignment="Middle"/>
				<textFieldExpression><![CDATA[$F{noiNopHsWardCode} != null && $F{noiNopHsWardCode}.length() > 1 ? String.valueOf($F{noiNopHsWardCode}.charAt(1)) : ""]]></textFieldExpression>
			</textField>
			<textField isBlankWhenNull="true">
				<reportElement x="494" y="151" width="20" height="14" uuid="9edaba7e-36ea-41e5-8c0b-4a2aa99a7a63"/>
				<textElement textAlignment="Center" verticalAlignment="Middle"/>
				<textFieldExpression><![CDATA[$F{noiNopHsWardCode} != null && $F{noiNopHsWardCode}.length() > 2 ? String.valueOf($F{noiNopHsWardCode}.charAt(2)) : ""]]></textFieldExpression>
			</textField>
			<textField isBlankWhenNull="true">
				<reportElement x="515" y="151" width="20" height="14" uuid="ad17eb96-59cc-4cf0-a60b-7df486dec762"/>
				<textElement textAlignment="Center" verticalAlignment="Middle"/>
				<textFieldExpression><![CDATA[$F{noiNopHsWardCode} != null && $F{noiNopHsWardCode}.length() > 3 ? String.valueOf($F{noiNopHsWardCode}.charAt(3)) : ""]]></textFieldExpression>
			</textField>
			<textField isBlankWhenNull="true">
				<reportElement x="537" y="151" width="20" height="14" uuid="d2e689ec-3cb0-43ba-a622-3d8b98f56300"/>
				<textElement textAlignment="Center" verticalAlignment="Middle"/>
				<textFieldExpression><![CDATA[$F{noiNopHsWardCode} != null && $F{noiNopHsWardCode}.length() > 4 ? String.valueOf($F{noiNopHsWardCode}.charAt(4)) : ""]]></textFieldExpression>
			</textField>
			<textField isBlankWhenNull="true">
				<reportElement x="99" y="194" width="452" height="16" uuid="e9915469-da4c-4294-92d9-a2d43c129cc4"/>
				<textElement textAlignment="Left" verticalAlignment="Middle"/>
				<textFieldExpression><![CDATA[$F{truongName} != null ? $F{truongName} : ""]]></textFieldExpression>
			</textField>
			<textField isBlankWhenNull="true">
				<reportElement x="110" y="221" width="24" height="14" uuid="d862919e-c9e9-4c98-8ea2-3a69e2a3dc27"/>
				<textElement textAlignment="Center" verticalAlignment="Middle"/>
				<textFieldExpression><![CDATA[$F{truongCode} != null && $F{truongCode}.length() > 0 ? String.valueOf($F{truongCode}.charAt(0)) : ""]]></textFieldExpression>
			</textField>
			<textField isBlankWhenNull="true">
				<reportElement x="134" y="221" width="24" height="14" uuid="596b9861-3617-4fee-b6bc-7bbb9e84bda3"/>
				<textElement textAlignment="Center" verticalAlignment="Middle"/>
				<textFieldExpression><![CDATA[$F{truongCode} != null && $F{truongCode}.length() > 1 ? String.valueOf($F{truongCode}.charAt(1)) : ""]]></textFieldExpression>
			</textField>
			<textField isBlankWhenNull="true">
				<reportElement x="158" y="221" width="24" height="14" uuid="d05c7297-89ff-4604-878e-5da91720c827"/>
				<textElement textAlignment="Center" verticalAlignment="Middle"/>
				<textFieldExpression><![CDATA[$F{truongCode} != null && $F{truongCode}.length() > 2 ? String.valueOf($F{truongCode}.charAt(2)) : ""]]></textFieldExpression>
			</textField>
			<textField isBlankWhenNull="true">
				<reportElement x="38" y="264" width="520" height="16" uuid="88b3ae31-df6c-49ad-87a7-c213b25688fc"/>
				<textElement textAlignment="Left" verticalAlignment="Middle"/>
				<textFieldExpression><![CDATA[$F{hoVaTen} != null ? $F{hoVaTen}.toUpperCase() : ""]]></textFieldExpression>
			</textField>
			<textField isBlankWhenNull="true">
				<reportElement x="538" y="251" width="20" height="14" uuid="b78e6199-ad80-4774-8440-b12616f7a2ae"/>
				<textElement textAlignment="Center" verticalAlignment="Middle"/>
				<textFieldExpression><![CDATA[$F{gender} != null ? $F{gender} : ""]]></textFieldExpression>
			</textField>
			<textField isBlankWhenNull="true">
				<reportElement x="387" y="323" width="24" height="14" uuid="cdfbcac0-3ba6-4691-8014-d8da57ee3750"/>
				<textElement textAlignment="Center" verticalAlignment="Middle"/>
				<textFieldExpression><![CDATA[$F{thuongTruCityCode} != null && $F{thuongTruCityCode}.length() > 0 ? String.valueOf($F{thuongTruCityCode}.charAt(0)) : ""]]></textFieldExpression>
			</textField>
			<textField isBlankWhenNull="true">
				<reportElement x="411" y="281" width="24" height="14" uuid="82107d9f-5c9f-4ee7-80d3-3323782ec192"/>
				<textElement textAlignment="Center" verticalAlignment="Middle"/>
				<textFieldExpression><![CDATA[$F{birthDate} != null && $F{birthDate}.length() > 1 ? String.valueOf($F{birthDate}.charAt(1)) : ""]]></textFieldExpression>
			</textField>
			<textField isBlankWhenNull="true">
				<reportElement x="448" y="281" width="24" height="14" uuid="5905cd8d-96e6-4b19-9ff2-766c96edb63c"/>
				<textElement textAlignment="Center" verticalAlignment="Middle"/>
				<textFieldExpression><![CDATA[$F{birthDate} != null && $F{birthDate}.length() > 3 ? String.valueOf($F{birthDate}.charAt(3)) : ""]]></textFieldExpression>
			</textField>
			<textField isBlankWhenNull="true">
				<reportElement x="471" y="281" width="24" height="14" uuid="5aca48e1-9078-48e3-8061-83a0cb49816d"/>
				<textElement textAlignment="Center" verticalAlignment="Middle"/>
				<textFieldExpression><![CDATA[$F{birthDate} != null && $F{birthDate}.length() > 4 ? String.valueOf($F{birthDate}.charAt(4)) : ""]]></textFieldExpression>
			</textField>
			<textField isBlankWhenNull="true">
				<reportElement x="509" y="281" width="24" height="14" uuid="18e5c0c5-156b-468d-8965-85462fd92a5e"/>
				<textElement textAlignment="Center" verticalAlignment="Middle"/>
				<textFieldExpression><![CDATA[$F{birthDate} != null && $F{birthDate}.length() > 8 ? String.valueOf($F{birthDate}.charAt(8)) : ""]]></textFieldExpression>
			</textField>
			<textField isBlankWhenNull="true">
				<reportElement x="533" y="281" width="24" height="14" uuid="6a7944b4-1989-41f9-a65f-a9cddcd20228"/>
				<textElement textAlignment="Center" verticalAlignment="Middle"/>
				<textFieldExpression><![CDATA[$F{birthDate} != null && $F{birthDate}.length() > 9 ? String.valueOf($F{birthDate}.charAt(9)) : ""]]></textFieldExpression>
			</textField>
			<textField isBlankWhenNull="true">
				<reportElement x="153" y="308" width="400" height="16" uuid="475c00c3-4a29-41e0-91de-03f963836c42"/>
				<textElement textAlignment="Left" verticalAlignment="Middle"/>
				<textFieldExpression><![CDATA[($F{noiKhaiSinhChiTiet} != null ? $F{noiKhaiSinhChiTiet} : "") + ($F{noiKhaiSinhWardName} != null ? ", " + $F{noiKhaiSinhWardName} : "") + ($F{noiKhaiSinhCityName} != null ? ", " + $F{noiKhaiSinhCityName} : "")]]></textFieldExpression>
			</textField>
			<textField isBlankWhenNull="true">
				<reportElement x="38" y="322" width="348" height="24" uuid="5221a84f-b0fb-4e27-b731-a5a5e2324ce5">
					<property name="com.jaspersoft.studio.unit.firstLineIndent" value="px"/>
				</reportElement>
				<textElement textAlignment="Left" verticalAlignment="Top">
					<paragraph firstLineIndent="120"/>
				</textElement>
				<textFieldExpression><![CDATA[($F{thuongTruChiTiet} != null ? $F{thuongTruChiTiet} : "") + ($F{thuongTruWardName} != null ? ", " + $F{thuongTruWardName} : "") + ($F{thuongTruCityName} != null ? ", " + $F{thuongTruCityName} : "") + ", thuộc khu vực ưu tiên: "]]></textFieldExpression>
			</textField>
			<textField isBlankWhenNull="true">
				<reportElement x="410" y="322" width="24" height="14" uuid="13bc6750-ad05-4e7f-b6e7-7381eb3fe334"/>
				<textElement textAlignment="Center" verticalAlignment="Middle"/>
				<textFieldExpression><![CDATA[$F{thuongTruCityCode} != null && $F{thuongTruCityCode}.length() > 1 ? String.valueOf($F{thuongTruCityCode}.charAt(1)) : ""]]></textFieldExpression>
			</textField>
			<textField isBlankWhenNull="true">
				<reportElement x="438" y="323" width="24" height="14" uuid="41c0fb36-4dce-42eb-ba1f-3c2ff5a913b9"/>
				<textElement textAlignment="Center" verticalAlignment="Middle"/>
				<textFieldExpression><![CDATA[$F{noiKhaiSinhWardCode} != null && $F{noiKhaiSinhWardCode}.length() > 0 ? String.valueOf($F{noiKhaiSinhWardCode}.charAt(0)) : ""]]></textFieldExpression>
			</textField>
			<textField isBlankWhenNull="true">
				<reportElement x="462" y="323" width="24" height="14" uuid="e53e3e32-f051-4ecf-b504-1ccd0cacdb0d"/>
				<textElement textAlignment="Center" verticalAlignment="Middle"/>
				<textFieldExpression><![CDATA[$F{noiKhaiSinhWardCode} != null && $F{noiKhaiSinhWardCode}.length() > 1 ? String.valueOf($F{noiKhaiSinhWardCode}.charAt(1)) : ""]]></textFieldExpression>
			</textField>
			<textField isBlankWhenNull="true">
				<reportElement x="486" y="323" width="24" height="14" uuid="d8f4e726-9453-401c-a5d9-4c80fe398828"/>
				<textElement textAlignment="Center" verticalAlignment="Middle"/>
				<textFieldExpression><![CDATA[$F{noiKhaiSinhWardCode} != null && $F{noiKhaiSinhWardCode}.length() > 2 ? String.valueOf($F{noiKhaiSinhWardCode}.charAt(2)) : ""]]></textFieldExpression>
			</textField>
			<textField isBlankWhenNull="true">
				<reportElement x="510" y="323" width="24" height="14" uuid="e9eefa8b-59e2-4170-a14b-cbcba4c222f0"/>
				<textElement textAlignment="Center" verticalAlignment="Middle"/>
				<textFieldExpression><![CDATA[$F{noiKhaiSinhWardCode} != null && $F{noiKhaiSinhWardCode}.length() > 3 ? String.valueOf($F{noiKhaiSinhWardCode}.charAt(3)) : ""]]></textFieldExpression>
			</textField>
			<textField isBlankWhenNull="true">
				<reportElement x="533" y="323" width="24" height="14" uuid="fa655193-2afc-4353-96c8-ebd49fb31ab9"/>
				<textElement textAlignment="Center" verticalAlignment="Middle"/>
				<textFieldExpression><![CDATA[$F{noiKhaiSinhWardCode} != null && $F{noiKhaiSinhWardCode}.length() > 4 ? String.valueOf($F{noiKhaiSinhWardCode}.charAt(4)) : ""]]></textFieldExpression>
			</textField>
			<textField isBlankWhenNull="true">
				<reportElement x="386" y="281" width="24" height="14" uuid="aae42a7d-03ed-4c14-a7ea-a3398c3c8d0d"/>
				<textElement textAlignment="Center" verticalAlignment="Middle"/>
				<textFieldExpression><![CDATA[$F{birthDate} != null && $F{birthDate}.length() > 0 ? String.valueOf($F{birthDate}.charAt(0)) : ""]]></textFieldExpression>
			</textField>
			<textField isBlankWhenNull="true">
				<reportElement x="266" y="221" width="24" height="15" uuid="586e506c-91f3-4a01-8524-16efd1406966">
					<property name="com.jaspersoft.studio.unit.height" value="px"/>
				</reportElement>
				<textElement textAlignment="Center" verticalAlignment="Middle"/>
				<textFieldExpression><![CDATA[$F{maXetTuyenCode} != null && $F{maXetTuyenCode}.length() > 0
				? String.valueOf($F{maXetTuyenCode}.charAt(0))
				: ""]]></textFieldExpression>
			</textField>
			<textField isBlankWhenNull="true">
				<reportElement x="290" y="221" width="24" height="15" uuid="5454a053-4248-434e-8fb3-9fff6b2da5e2">
					<property name="com.jaspersoft.studio.unit.height" value="px"/>
				</reportElement>
				<textElement textAlignment="Center" verticalAlignment="Middle"/>
				<textFieldExpression><![CDATA[$F{maXetTuyenCode} != null && $F{maXetTuyenCode}.length() > 1
				? String.valueOf($F{maXetTuyenCode}.charAt(1))
				: ""]]></textFieldExpression>
			</textField>
			<textField isBlankWhenNull="true">
				<reportElement x="314" y="221" width="24" height="15" uuid="b31e39a6-77df-4aa3-b96f-83303592a492">
					<property name="com.jaspersoft.studio.unit.height" value="px"/>
				</reportElement>
				<textElement textAlignment="Center" verticalAlignment="Middle"/>
				<textFieldExpression><![CDATA[$F{maXetTuyenCode} != null && $F{maXetTuyenCode}.length() > 2
				? String.valueOf($F{maXetTuyenCode}.charAt(2))
				: ""]]></textFieldExpression>
			</textField>
			<textField isBlankWhenNull="true">
				<reportElement x="338" y="221" width="24" height="15" uuid="fca214a1-e210-4657-891e-3406868ea2e4">
					<property name="com.jaspersoft.studio.unit.height" value="px"/>
				</reportElement>
				<textElement textAlignment="Center" verticalAlignment="Middle"/>
				<textFieldExpression><![CDATA[$F{maXetTuyenCode} != null && $F{maXetTuyenCode}.length() > 3
				? String.valueOf($F{maXetTuyenCode}.charAt(3))
				: ""]]></textFieldExpression>
			</textField>
			<textField isBlankWhenNull="true">
				<reportElement x="362" y="221" width="24" height="15" uuid="1b9d9185-baec-4529-9f8b-88eb04aaad54">
					<property name="com.jaspersoft.studio.unit.height" value="px"/>
				</reportElement>
				<textElement textAlignment="Center" verticalAlignment="Middle"/>
				<textFieldExpression><![CDATA[$F{maXetTuyenCode} != null && $F{maXetTuyenCode}.length() > 4
				? String.valueOf($F{maXetTuyenCode}.charAt(4))
				: ""]]></textFieldExpression>
			</textField>
			<textField isBlankWhenNull="true">
				<reportElement x="386" y="221" width="24" height="15" uuid="6a4c1f55-bfef-4467-9185-30e98d890a49">
					<property name="com.jaspersoft.studio.unit.height" value="px"/>
				</reportElement>
				<textElement textAlignment="Center" verticalAlignment="Middle"/>
				<textFieldExpression><![CDATA[$F{maXetTuyenCode} != null && $F{maXetTuyenCode}.length() > 5
				? String.valueOf($F{maXetTuyenCode}.charAt(5))
				: ""]]></textFieldExpression>
			</textField>
			<textField isBlankWhenNull="true">
				<reportElement x="410" y="221" width="24" height="15" uuid="27b9e76e-5d63-4055-ab85-a61357cf9c89">
					<property name="com.jaspersoft.studio.unit.height" value="px"/>
				</reportElement>
				<textElement textAlignment="Center" verticalAlignment="Middle"/>
				<textFieldExpression><![CDATA[$F{maXetTuyenCode} != null && $F{maXetTuyenCode}.length() > 6
				? String.valueOf($F{maXetTuyenCode}.charAt(6))
				: ""]]></textFieldExpression>
			</textField>
			<textField isBlankWhenNull="true">
				<reportElement x="434" y="221" width="24" height="15" uuid="822f95e6-5190-4ab7-95e4-98969d10539f">
					<property name="com.jaspersoft.studio.unit.height" value="px"/>
				</reportElement>
				<textElement textAlignment="Center" verticalAlignment="Middle"/>
				<textFieldExpression><![CDATA[$F{maXetTuyenCode} != null && $F{maXetTuyenCode}.length() > 7
				? String.valueOf($F{maXetTuyenCode}.charAt(7))
				: ""]]></textFieldExpression>
			</textField>
			<textField isBlankWhenNull="true">
				<reportElement x="277" y="347" width="233" height="16" uuid="719c8786-d650-4f9e-8d19-470ffebe7887"/>
				<textElement textAlignment="Left" verticalAlignment="Middle"/>
				<textFieldExpression><![CDATA[$F{danTocName} != null ? $F{danTocName} : ""]]></textFieldExpression>
			</textField>
			<textField isBlankWhenNull="true">
				<reportElement x="518" y="347" width="39" height="14" uuid="0073cf54-8f93-4dc8-8d6e-86691d32c6b4"/>
				<textElement textAlignment="Center" verticalAlignment="Middle"/>
				<textFieldExpression><![CDATA[($F{danTocName} == "Kinh" || $F{danTocName} == "kinh") ? "0" : "1"]]></textFieldExpression>
			</textField>
			<textField isBlankWhenNull="true">
				<reportElement x="283" y="361" width="227" height="16" uuid="24082c16-2074-40a1-b6b5-d3e4c041237a"/>
				<textElement textAlignment="Left" verticalAlignment="Middle"/>
				<textFieldExpression><![CDATA[$F{tonGiaoName} != null ? $F{tonGiaoName} : ""]]></textFieldExpression>
			</textField>
			<textField isBlankWhenNull="true">
				<reportElement x="518" y="360" width="39" height="14" uuid="3c1e06af-47b5-4201-bb4d-839eb22faae1"/>
				<textElement textAlignment="Center" verticalAlignment="Middle"/>
				<textFieldExpression><![CDATA[($F{tonGiaoName} == "Không" || $F{tonGiaoName} == "không") ? "0" :
($F{tonGiaoName} == "Phật giáo" || $F{tonGiaoName} == "phật giáo") ? "1" : "2"]]></textFieldExpression>
			</textField>
			<textField isBlankWhenNull="true">
				<reportElement x="97" y="399" width="263" height="16" uuid="0cba4556-c01c-4380-9f72-c47a44b6eeb7"/>
				<textElement textAlignment="Left" verticalAlignment="Middle"/>
				<textFieldExpression><![CDATA[($F{lop10TruongName} != null ? $F{lop10TruongName} : "") + ", " + "Xã/Phường..." + ", " + ($F{lop10CityName} != null ? $F{lop10CityName} : "")]]></textFieldExpression>
			</textField>
			<textField isBlankWhenNull="true">
				<reportElement x="97" y="414" width="263" height="16" uuid="44de17b4-1294-4053-bdcc-ade3fe3022ad"/>
				<textElement textAlignment="Left" verticalAlignment="Middle"/>
				<textFieldExpression><![CDATA[($F{lop11TruongName} != null ? $F{lop11TruongName} : "") + ", " + "Xã/Phường..." + ", " + ($F{lop11CityName} != null ? $F{lop11CityName} : "")]]></textFieldExpression>
			</textField>
			<textField isBlankWhenNull="true">
				<reportElement x="97" y="429" width="263" height="16" uuid="39f71a5e-81f3-470b-9ef3-756bd5af4f96"/>
				<textElement textAlignment="Left" verticalAlignment="Middle"/>
				<textFieldExpression><![CDATA[($F{lop12TruongName} != null ? $F{lop12TruongName} : "") + ", " + "Xã/Phường..." + ", " + ($F{lop12CityName} != null ? $F{lop12CityName} : "")]]></textFieldExpression>
			</textField>
			<textField isBlankWhenNull="true">
				<reportElement x="360" y="400" width="24" height="13" uuid="1e9604d6-3ccb-49e7-a436-60f3a3ebc10e"/>
				<textElement textAlignment="Center" verticalAlignment="Middle"/>
				<textFieldExpression><![CDATA[$F{lop10MaTruong} != null && $F{lop10MaTruong}.length() > 0 ? String.valueOf($F{lop10MaTruong}.charAt(0)) : ""]]></textFieldExpression>
			</textField>
			<textField isBlankWhenNull="true">
				<reportElement x="384" y="400" width="24" height="13" uuid="c5930c7d-98af-4758-988d-ed86aff3de5f"/>
				<textElement textAlignment="Center" verticalAlignment="Middle"/>
				<textFieldExpression><![CDATA[$F{lop10MaTruong} != null && $F{lop10MaTruong}.length() > 1 ? String.valueOf($F{lop10MaTruong}.charAt(1)) : ""]]></textFieldExpression>
			</textField>
			<textField isBlankWhenNull="true">
				<reportElement x="360" y="415" width="24" height="13" uuid="95e0e334-e587-4113-8ffe-6310c2bad76c">
					<property name="com.jaspersoft.studio.unit.height" value="px"/>
				</reportElement>
				<textElement textAlignment="Center" verticalAlignment="Middle"/>
				<textFieldExpression><![CDATA[$F{lop11MaTruong} != null && $F{lop11MaTruong}.length() > 0 ? String.valueOf($F{lop11MaTruong}.charAt(0)) : ""]]></textFieldExpression>
			</textField>
			<textField isBlankWhenNull="true">
				<reportElement x="384" y="415" width="24" height="13" uuid="0aad54b2-4dad-4366-9041-cb42fab58da2">
					<property name="com.jaspersoft.studio.unit.height" value="px"/>
				</reportElement>
				<textElement textAlignment="Center" verticalAlignment="Middle"/>
				<textFieldExpression><![CDATA[$F{lop11MaTruong} != null && $F{lop11MaTruong}.length() > 0 ? String.valueOf($F{lop11MaTruong}.charAt(0)) : ""]]></textFieldExpression>
			</textField>
			<textField isBlankWhenNull="true">
				<reportElement x="360" y="430" width="24" height="13" uuid="cde50771-1a92-49b1-ae2b-249771394d33"/>
				<textElement textAlignment="Center" verticalAlignment="Middle"/>
				<textFieldExpression><![CDATA[$F{lop12MaTruong} != null && $F{lop12MaTruong}.length() > 0 ? String.valueOf($F{lop12MaTruong}.charAt(0)) : ""]]></textFieldExpression>
			</textField>
			<textField isBlankWhenNull="true">
				<reportElement x="384" y="430" width="24" height="13" uuid="4b654bf7-6af9-4425-8a47-d6d135806fe6"/>
				<textElement textAlignment="Center" verticalAlignment="Middle"/>
				<textFieldExpression><![CDATA[$F{lop12MaTruong} != null && $F{lop12MaTruong}.length() > 0 ? String.valueOf($F{lop12MaTruong}.charAt(0)) : ""]]></textFieldExpression>
			</textField>
			<textField isBlankWhenNull="true">
				<reportElement x="414" y="400" width="24" height="13" uuid="cb0030c8-8e9f-4f47-9059-9f1d5c111b89"/>
				<textElement textAlignment="Center" verticalAlignment="Middle"/>
				<textFieldExpression><![CDATA[$F{lop10MaTruong} != null && $F{lop10MaTruong}.length() > 0 ? String.valueOf($F{lop10MaTruong}.charAt(0)) : ""]]></textFieldExpression>
			</textField>
			<textField isBlankWhenNull="true">
				<reportElement x="438" y="400" width="24" height="13" uuid="66ac006a-06bc-454f-9082-74730b09d60c"/>
				<textElement textAlignment="Center" verticalAlignment="Middle"/>
				<textFieldExpression><![CDATA[$F{lop10MaTruong} != null && $F{lop10MaTruong}.length() > 1 ? String.valueOf($F{lop10MaTruong}.charAt(1)) : ""]]></textFieldExpression>
			</textField>
			<textField isBlankWhenNull="true">
				<reportElement x="462" y="400" width="24" height="13" uuid="4f71083e-322f-48ef-a837-9c144bf90168"/>
				<textElement textAlignment="Center" verticalAlignment="Middle"/>
				<textFieldExpression><![CDATA[$F{lop10MaTruong} != null && $F{lop10MaTruong}.length() > 2 ? String.valueOf($F{lop10MaTruong}.charAt(2)) : ""]]></textFieldExpression>
			</textField>
			<textField isBlankWhenNull="true">
				<reportElement x="486" y="400" width="24" height="13" uuid="6082ac78-bc8f-4524-babe-cabfc42ff302"/>
				<textElement textAlignment="Center" verticalAlignment="Middle"/>
				<textFieldExpression><![CDATA[$F{lop10MaTruong} != null && $F{lop10MaTruong}.length() > 3 ? String.valueOf($F{lop10MaTruong}.charAt(3)) : ""]]></textFieldExpression>
			</textField>
			<textField isBlankWhenNull="true">
				<reportElement x="510" y="400" width="24" height="13" uuid="82182758-fe32-4226-9884-971c47bf3fc4"/>
				<textElement textAlignment="Center" verticalAlignment="Middle"/>
				<textFieldExpression><![CDATA[$F{lop10MaTruong} != null && $F{lop10MaTruong}.length() > 4 ? String.valueOf($F{lop10MaTruong}.charAt(4)) : ""]]></textFieldExpression>
			</textField>
			<textField isBlankWhenNull="true">
				<reportElement x="534" y="400" width="24" height="13" uuid="5433791b-b44a-4f60-8ddb-467e399ab890"/>
				<textElement textAlignment="Center" verticalAlignment="Middle"/>
				<textFieldExpression><![CDATA[$F{lop10MaTruong} != null && $F{lop10MaTruong}.length() > 5 ? String.valueOf($F{lop10MaTruong}.charAt(5)) : ""]]></textFieldExpression>
			</textField>
			<textField isBlankWhenNull="true">
				<reportElement x="438" y="415" width="24" height="13" uuid="7f7b9783-83fa-489f-9e38-54bdfc974fba">
					<property name="com.jaspersoft.studio.unit.height" value="px"/>
				</reportElement>
				<textElement textAlignment="Center" verticalAlignment="Middle"/>
				<textFieldExpression><![CDATA[$F{lop11MaTruong} != null && $F{lop11MaTruong}.length() > 1 ? String.valueOf($F{lop11MaTruong}.charAt(1)) : ""]]></textFieldExpression>
			</textField>
			<textField isBlankWhenNull="true">
				<reportElement x="510" y="415" width="24" height="13" uuid="fcf967ce-273a-4404-8577-e0607e437ef9">
					<property name="com.jaspersoft.studio.unit.height" value="px"/>
				</reportElement>
				<textElement textAlignment="Center" verticalAlignment="Middle"/>
				<textFieldExpression><![CDATA[$F{lop11MaTruong} != null && $F{lop11MaTruong}.length() > 4 ? String.valueOf($F{lop11MaTruong}.charAt(4)) : ""]]></textFieldExpression>
			</textField>
			<textField isBlankWhenNull="true">
				<reportElement x="414" y="415" width="24" height="13" uuid="8b157a61-649b-4872-8218-6fca08f92dfc">
					<property name="com.jaspersoft.studio.unit.height" value="px"/>
				</reportElement>
				<textElement textAlignment="Center" verticalAlignment="Middle"/>
				<textFieldExpression><![CDATA[$F{lop11MaTruong} != null && $F{lop11MaTruong}.length() > 0 ? String.valueOf($F{lop11MaTruong}.charAt(0)) : ""]]></textFieldExpression>
			</textField>
			<textField isBlankWhenNull="true">
				<reportElement x="534" y="415" width="24" height="13" uuid="888d0d1e-4884-47d6-892d-471012ba2e75">
					<property name="com.jaspersoft.studio.unit.height" value="px"/>
				</reportElement>
				<textElement textAlignment="Center" verticalAlignment="Middle"/>
				<textFieldExpression><![CDATA[$F{lop11MaTruong} != null && $F{lop11MaTruong}.length() > 5 ? String.valueOf($F{lop11MaTruong}.charAt(5)) : ""]]></textFieldExpression>
			</textField>
			<textField isBlankWhenNull="true">
				<reportElement x="486" y="415" width="24" height="13" uuid="073f0442-528a-4581-b9af-62da26b738ce">
					<property name="com.jaspersoft.studio.unit.height" value="px"/>
				</reportElement>
				<textElement textAlignment="Center" verticalAlignment="Middle"/>
				<textFieldExpression><![CDATA[$F{lop11MaTruong} != null && $F{lop11MaTruong}.length() > 3 ? String.valueOf($F{lop11MaTruong}.charAt(3)) : ""]]></textFieldExpression>
			</textField>
			<textField isBlankWhenNull="true">
				<reportElement x="462" y="415" width="24" height="13" uuid="5db45017-819a-4827-98c0-6a6340e7b04a">
					<property name="com.jaspersoft.studio.unit.height" value="px"/>
				</reportElement>
				<textElement textAlignment="Center" verticalAlignment="Middle"/>
				<textFieldExpression><![CDATA[$F{lop11MaTruong} != null && $F{lop11MaTruong}.length() > 2 ? String.valueOf($F{lop11MaTruong}.charAt(2)) : ""]]></textFieldExpression>
			</textField>
			<textField isBlankWhenNull="true">
				<reportElement x="438" y="430" width="24" height="13" uuid="d5440384-8481-442c-be15-d80474618eab"/>
				<textElement textAlignment="Center" verticalAlignment="Middle"/>
				<textFieldExpression><![CDATA[$F{lop12MaTruong} != null && $F{lop12MaTruong}.length() > 1 ? String.valueOf($F{lop12MaTruong}.charAt(1)) : ""]]></textFieldExpression>
			</textField>
			<textField isBlankWhenNull="true">
				<reportElement x="510" y="430" width="24" height="13" uuid="c8f94f4c-261f-4db3-a885-478b454d66d2"/>
				<textElement textAlignment="Center" verticalAlignment="Middle"/>
				<textFieldExpression><![CDATA[$F{lop12MaTruong} != null && $F{lop12MaTruong}.length() > 4 ? String.valueOf($F{lop12MaTruong}.charAt(4)) : ""]]></textFieldExpression>
			</textField>
			<textField isBlankWhenNull="true">
				<reportElement x="414" y="430" width="24" height="13" uuid="6489f7ad-e6ee-4d1f-9188-62e929fd1e0d"/>
				<textElement textAlignment="Center" verticalAlignment="Middle"/>
				<textFieldExpression><![CDATA[$F{lop12MaTruong} != null && $F{lop12MaTruong}.length() > 0 ? String.valueOf($F{lop12MaTruong}.charAt(0)) : ""]]></textFieldExpression>
			</textField>
			<textField isBlankWhenNull="true">
				<reportElement x="534" y="430" width="24" height="13" uuid="5eb5f33c-5818-4120-a74c-9abe86620dc2"/>
				<textElement textAlignment="Center" verticalAlignment="Middle"/>
				<textFieldExpression><![CDATA[$F{lop12MaTruong} != null && $F{lop12MaTruong}.length() > 5 ? String.valueOf($F{lop12MaTruong}.charAt(5)) : ""]]></textFieldExpression>
			</textField>
			<textField isBlankWhenNull="true">
				<reportElement x="486" y="430" width="24" height="13" uuid="f102d6bf-15ba-4390-83e3-93a69e160d02"/>
				<textElement textAlignment="Center" verticalAlignment="Middle"/>
				<textFieldExpression><![CDATA[$F{lop12MaTruong} != null && $F{lop12MaTruong}.length() > 3 ? String.valueOf($F{lop12MaTruong}.charAt(3)) : ""]]></textFieldExpression>
			</textField>
			<textField isBlankWhenNull="true">
				<reportElement x="462" y="430" width="24" height="13" uuid="e45b434b-61db-40a9-9249-e5f156b9c43a"/>
				<textElement textAlignment="Center" verticalAlignment="Middle"/>
				<textFieldExpression><![CDATA[$F{lop12MaTruong} != null && $F{lop12MaTruong}.length() > 2 ? String.valueOf($F{lop12MaTruong}.charAt(2)) : ""]]></textFieldExpression>
			</textField>
			<textField isBlankWhenNull="true">
				<reportElement x="331" y="495" width="179" height="16" uuid="91c0dd6e-d46e-439b-861e-099b8afd317a"/>
				<textElement textAlignment="Left" verticalAlignment="Middle"/>
				<textFieldExpression><![CDATA[$F{khuVucDongQuanCode} != null ? $F{khuVucDongQuanCode} : ""]]></textFieldExpression>
			</textField>
			<textField isBlankWhenNull="true">
				<reportElement x="462" y="452" width="24" height="15" uuid="6c80ea1b-2f1b-426c-95fc-2fbb5e3ac7f2"/>
				<textElement textAlignment="Center" verticalAlignment="Middle"/>
				<textFieldExpression><![CDATA[$F{namTotNghiepTHPT} != null && $F{namTotNghiepTHPT}.length() > 0 ? String.valueOf($F{namTotNghiepTHPT}.charAt(0)) : ""]]></textFieldExpression>
			</textField>
			<textField isBlankWhenNull="true">
				<reportElement x="230" y="443" width="224" height="16" uuid="8ffab4cf-5a70-47c0-8c03-3a292293e9d2"/>
				<textElement textAlignment="Left" verticalAlignment="Middle"/>
				<textFieldExpression><![CDATA[$F{khuVucNoiHocTHPTCode} != null ? $F{khuVucNoiHocTHPTCode} : ""]]></textFieldExpression>
			</textField>
			<textField isBlankWhenNull="true">
				<reportElement x="486" y="452" width="24" height="15" uuid="d10671bd-7e9a-46c2-8add-d57d4fece7d1"/>
				<textElement textAlignment="Center" verticalAlignment="Middle"/>
				<textFieldExpression><![CDATA[$F{namTotNghiepTHPT} != null && $F{namTotNghiepTHPT}.length() > 1 ? String.valueOf($F{namTotNghiepTHPT}.charAt(1)) : ""]]></textFieldExpression>
			</textField>
			<textField isBlankWhenNull="true">
				<reportElement x="510" y="452" width="24" height="15" uuid="0b9d160d-1f7f-497f-90a0-23eb14cc158c"/>
				<textElement textAlignment="Center" verticalAlignment="Middle"/>
				<textFieldExpression><![CDATA[$F{namTotNghiepTHPT} != null && $F{namTotNghiepTHPT}.length() > 2 ? String.valueOf($F{namTotNghiepTHPT}.charAt(2)) : ""]]></textFieldExpression>
			</textField>
			<textField isBlankWhenNull="true">
				<reportElement x="534" y="452" width="24" height="15" uuid="2c14c65d-34ac-4c1f-bbc1-a004da9a104f"/>
				<textElement textAlignment="Center" verticalAlignment="Middle"/>
				<textFieldExpression><![CDATA[$F{namTotNghiepTHPT} != null && $F{namTotNghiepTHPT}.length() > 3 ? String.valueOf($F{namTotNghiepTHPT}.charAt(3)) : ""]]></textFieldExpression>
			</textField>
			<textField isBlankWhenNull="true">
				<reportElement x="136" y="469" width="117" height="16" uuid="74f80acc-1089-4447-9d30-bddcbc145973"/>
				<textElement textAlignment="Center" verticalAlignment="Middle"/>
				<textFieldExpression><![CDATA[$F{ngayNhapNgu} != null ? $F{ngayNhapNgu} : ".........................................."]]></textFieldExpression>
			</textField>
			<staticText>
				<reportElement x="252" y="470" width="307" height="15" uuid="ec4e3f97-f69d-4ab4-abe8-75caa01142c5"/>
				<textElement textAlignment="Left" verticalAlignment="Top">
					<font fontName="Times New Roman" size="11" isBold="false" isItalic="true" isUnderline="false" isStrikeThrough="false"/>
				</textElement>
				<text><![CDATA[nơi đóng quân (ghi rõ thôn hoặc tương đương, xã, tỉnh)]]></text>
			</staticText>
			<textField isBlankWhenNull="true">
				<reportElement x="37" y="485" width="520" height="16" uuid="9484319a-5fe3-4f84-938f-29a9bf9ef263"/>
				<textElement textAlignment="Left" verticalAlignment="Middle"/>
				<textFieldExpression><![CDATA[($F{noiDongQuanChiTiet} != null && $F{noiDongQuanWardName} != null && $F{noiDongQuanCityName} != null) ? $F{noiDongQuanChiTiet} + ", " + $F{noiDongQuanWardName} + ", " + $F{noiDongQuanCityName} : "................................................................................................................................................................."]]></textFieldExpression>
			</textField>
			<textField isBlankWhenNull="true">
				<reportElement x="509" y="526" width="24" height="15" uuid="02b4a7fb-0d4e-4b17-a063-3779765ae722"/>
				<textElement textAlignment="Center" verticalAlignment="Middle"/>
				<textFieldExpression><![CDATA[$F{doiTuongUuTienCode} != null && $F{doiTuongUuTienCode}.length() > 0 ? String.valueOf($F{doiTuongUuTienCode}.charAt(0)) : ""]]></textFieldExpression>
			</textField>
			<textField isBlankWhenNull="true">
				<reportElement x="533" y="526" width="24" height="15" uuid="119c3f73-ef06-4090-a12a-25361e9b7ff7"/>
				<textElement textAlignment="Center" verticalAlignment="Middle"/>
				<textFieldExpression><![CDATA[$F{doiTuongUuTienCode} != null && $F{doiTuongUuTienCode}.length() > 1 ? String.valueOf($F{doiTuongUuTienCode}.charAt(1)) : ""]]></textFieldExpression>
			</textField>
			<textField isBlankWhenNull="true">
				<reportElement x="270" y="554" width="24" height="15" uuid="855e087d-5cce-4c0e-9369-bd940bcec42f"/>
				<textElement textAlignment="Center" verticalAlignment="Middle"/>
				<textFieldExpression><![CDATA[$F{soCCCD} != null && $F{soCCCD}.length() > 0
				? String.valueOf($F{soCCCD}.charAt(0))
				: ""]]></textFieldExpression>
			</textField>
			<textField isBlankWhenNull="true">
				<reportElement x="294" y="554" width="24" height="15" uuid="252d88da-8bf3-4afd-bbb0-e9d62eba0308"/>
				<textElement textAlignment="Center" verticalAlignment="Middle"/>
				<textFieldExpression><![CDATA[$F{soCCCD} != null && $F{soCCCD}.length() > 1
				? String.valueOf($F{soCCCD}.charAt(1))
				: ""]]></textFieldExpression>
			</textField>
			<textField isBlankWhenNull="true">
				<reportElement x="342" y="554" width="24" height="15" uuid="49512e50-7aeb-494b-a05a-aaf7b3cf5aa3"/>
				<textElement textAlignment="Center" verticalAlignment="Middle"/>
				<textFieldExpression><![CDATA[$F{soCCCD} != null && $F{soCCCD}.length() > 3
				? String.valueOf($F{soCCCD}.charAt(3))
				: ""]]></textFieldExpression>
			</textField>
			<textField isBlankWhenNull="true">
				<reportElement x="318" y="554" width="24" height="15" uuid="d9e5cf5f-24ae-472b-950f-3a1fae1112f8"/>
				<textElement textAlignment="Center" verticalAlignment="Middle"/>
				<textFieldExpression><![CDATA[$F{soCCCD} != null && $F{soCCCD}.length() > 2
				? String.valueOf($F{soCCCD}.charAt(2))
				: ""]]></textFieldExpression>
			</textField>
			<textField isBlankWhenNull="true">
				<reportElement x="366" y="554" width="24" height="15" uuid="dd4e43f3-a9fe-4be2-bdf2-6dd75c4dde2b"/>
				<textElement textAlignment="Center" verticalAlignment="Middle"/>
				<textFieldExpression><![CDATA[$F{soCCCD} != null && $F{soCCCD}.length() > 4
				? String.valueOf($F{soCCCD}.charAt(4))
				: ""]]></textFieldExpression>
			</textField>
			<textField isBlankWhenNull="true">
				<reportElement x="390" y="554" width="24" height="15" uuid="a1366e4f-3239-4981-b400-d41e3b828733"/>
				<textElement textAlignment="Center" verticalAlignment="Middle"/>
				<textFieldExpression><![CDATA[$F{soCCCD} != null && $F{soCCCD}.length() > 5
				? String.valueOf($F{soCCCD}.charAt(5))
				: ""]]></textFieldExpression>
			</textField>
			<textField isBlankWhenNull="true">
				<reportElement x="414" y="554" width="24" height="15" uuid="e6c851bc-c521-4837-b860-2933fee9b49e"/>
				<textElement textAlignment="Center" verticalAlignment="Middle"/>
				<textFieldExpression><![CDATA[$F{soCCCD} != null && $F{soCCCD}.length() > 6
				? String.valueOf($F{soCCCD}.charAt(6))
				: ""]]></textFieldExpression>
			</textField>
			<textField isBlankWhenNull="true">
				<reportElement x="438" y="554" width="24" height="15" uuid="fa24e06b-d41d-41ad-bccd-3c351f4cce21"/>
				<textElement textAlignment="Center" verticalAlignment="Middle"/>
				<textFieldExpression><![CDATA[$F{soCCCD} != null && $F{soCCCD}.length() > 7
				? String.valueOf($F{soCCCD}.charAt(7))
				: ""]]></textFieldExpression>
			</textField>
			<textField isBlankWhenNull="true">
				<reportElement x="462" y="554" width="24" height="15" uuid="882deaee-8dc9-4544-a934-ea5ced743435"/>
				<textElement textAlignment="Center" verticalAlignment="Middle"/>
				<textFieldExpression><![CDATA[$F{soCCCD} != null && $F{soCCCD}.length() > 8
				? String.valueOf($F{soCCCD}.charAt(8))
				: ""]]></textFieldExpression>
			</textField>
			<textField isBlankWhenNull="true">
				<reportElement x="486" y="554" width="24" height="15" uuid="119e7215-fd3b-479c-908e-b897a5672011"/>
				<textElement textAlignment="Center" verticalAlignment="Middle"/>
				<textFieldExpression><![CDATA[$F{soCCCD} != null && $F{soCCCD}.length() > 9
				? String.valueOf($F{soCCCD}.charAt(9))
				: ""]]></textFieldExpression>
			</textField>
			<textField isBlankWhenNull="true">
				<reportElement x="510" y="554" width="24" height="15" uuid="970fb3bc-6a6f-4634-b4bf-270ccee8e408"/>
				<textElement textAlignment="Center" verticalAlignment="Middle"/>
				<textFieldExpression><![CDATA[$F{soCCCD} != null && $F{soCCCD}.length() > 10
				? String.valueOf($F{soCCCD}.charAt(10))
				: ""]]></textFieldExpression>
			</textField>
			<textField isBlankWhenNull="true">
				<reportElement x="534" y="554" width="24" height="15" uuid="4f16da72-6492-45e1-a562-a9625a069779"/>
				<textElement textAlignment="Center" verticalAlignment="Middle"/>
				<textFieldExpression><![CDATA[$F{soCCCD} != null && $F{soCCCD}.length() > 11
				? String.valueOf($F{soCCCD}.charAt(11))
				: ""]]></textFieldExpression>
			</textField>
			<textField isBlankWhenNull="true">
				<reportElement x="534" y="571" width="24" height="15" uuid="22bf40e5-72fc-4245-8df2-32b4cb00ab48"/>
				<textElement textAlignment="Center" verticalAlignment="Middle"/>
				<textFieldExpression><![CDATA[$F{doiTuongSoTuyen} != null ? $F{doiTuongSoTuyen} : ""]]></textFieldExpression>
			</textField>
			<staticText>
				<reportElement x="37" y="599" width="520" height="48" uuid="7103c3ba-ff65-4226-84b2-2b08b40ddf0c">
					<property name="com.jaspersoft.studio.unit.width" value="px"/>
					<property name="com.jaspersoft.studio.unit.height" value="px"/>
				</reportElement>
				<textElement textAlignment="Left" verticalAlignment="Top" markup="styled">
					<font fontName="Times New Roman" size="10" isBold="false" isItalic="true" isUnderline="false" isStrikeThrough="false"/>
				</textElement>
				<text><![CDATA[Tôi xin cam đoan những lời khai trong bản này là đúng sự thật, nếu sai tôi xin chịu trách nhiệm trước pháp luật, chấp nhận xử lý theo quy chế của Nhà nước và quy định của Bộ Quốc phòng. Nếu trúng tuyển được vào học, tôi xin hứa tích cực học tập, rèn luyện, chấp hành nghiêm điều lệnh, điều lệ của quân đội; chấp hành sự phân công theo ngành học; phục tùng tuyệt đối sự phân công của tổ chức sau khi tốt nghiệp, nhận và hoàn thành mọi nhiệm vụ được giao.]]></text>
			</staticText>
			<textField isBlankWhenNull="true">
				<reportElement x="369" y="737" width="179" height="16" uuid="8389d5ac-b28d-4fc1-9d1b-d271e525128f"/>
				<textElement textAlignment="Center" verticalAlignment="Middle">
					<font size="9"/>
				</textElement>
				<textFieldExpression><![CDATA["Ngày " + (new SimpleDateFormat("dd")).format(new Date()) +
					" tháng " + (new SimpleDateFormat("MM")).format(new Date()) +
					" năm " + (new SimpleDateFormat("yyyy")).format(new Date())]]></textFieldExpression>
			</textField>
			<textField isBlankWhenNull="true">
				<reportElement x="19" y="697" width="118" height="16" uuid="cf317ef9-4ecf-4c52-bc45-1cb8783d4211"/>
				<textElement textAlignment="Center" verticalAlignment="Middle">
					<font size="9"/>
				</textElement>
				<textFieldExpression><![CDATA["Ngày " + (new SimpleDateFormat("dd")).format(new Date()) +
					" tháng " + (new SimpleDateFormat("MM")).format(new Date()) +
					" năm " + (new SimpleDateFormat("yyyy")).format(new Date())]]></textFieldExpression>
			</textField>
			<rectangle>
				<reportElement x="480" y="93" width="26" height="15" uuid="837074f0-d6cf-4369-87ca-e90fe4784b7f"/>
			</rectangle>
			<rectangle>
				<reportElement x="506" y="93" width="26" height="15" uuid="1567da03-e28f-4c24-a493-cfe6da60b810"/>
			</rectangle>
			<rectangle>
				<reportElement x="532" y="93" width="26" height="15" uuid="7487154a-d4b1-46d4-8e41-8b03128ae2fc"/>
			</rectangle>
			<staticText>
				<reportElement x="338" y="208" width="51" height="15" uuid="53cc8184-0cf0-476b-8cfe-ccbffd2cee52"/>
				<textElement textAlignment="Left" verticalAlignment="Top">
					<font fontName="Times New Roman" size="11" isBold="false" isItalic="true" isUnderline="false" isStrikeThrough="false"/>
				</textElement>
				<text><![CDATA[Mã ngành]]></text>
			</staticText>
		</band>
	</detail>
</jasperReport>