<?xml version="1.0" encoding="UTF-8"?>
<jasperReport xmlns="http://jasperreports.sourceforge.net/jasperreports"
              xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
              xsi:schemaLocation="http://jasperreports.sourceforge.net/jasperreports http://jasperreports.sourceforge.net/xsd/jasperreport.xsd"
              name="Don_DKXT_CuTuyen_Mau01"
              pageWidth="595" pageHeight="842"
              columnWidth="595"
              leftMargin="0" rightMargin="0" topMargin="0" bottomMargin="0"
              uuid="7f4b9c1e-2c9a-4b2e-9a4f-0b3c1b6a6c8d">
	<property name="com.jaspersoft.studio.data.defaultdataadapter" value="One Empty Record"/>
	<style name="DefaultStyle" isDefault="true" fontName="Times New Roman" fontSize="11"/>

	<queryString language="json">
		<![CDATA[]]>
	</queryString>

	<field name="diaDanhName" class="java.lang.String"/>
	<field name="banTuyenSinhName" class="java.lang.String"/>
	<field name="ngayLap" class="java.lang.String"/>
	<field name="hoVaTen" class="java.lang.String"/>
	<field name="gender" class="java.lang.String"/>
	<field name="birthDate" class="java.lang.String"/>
	<field name="soCCCD" class="java.lang.String"/>
	<field name="danTocName" class="java.lang.String"/>
	<field name="tonGiaoName" class="java.lang.String"/>
	<field name="diaChiChiTiet" class="java.lang.String"/>
	<field name="wardName" class="java.lang.String"/>
	<field name="cityName" class="java.lang.String"/>
	<field name="truongName" class="java.lang.String"/>
	<field name="nganhHocName" class="java.lang.String"/>
	<field name="trinhDoDaoTaoCode" class="java.lang.String"/>
	<field name="doiTuongUuTienName" class="java.lang.String"/>
	<field name="doiTuongUuTien" class="java.lang.String"/>
	<field name="daTotNghiep" class="java.lang.String"/>
	<field name="ngayThiTotNghiep" class="java.lang.String"/>
	<field name="hocLucLop10" class="java.lang.String"/>
	<field name="hanhKiemLop10" class="java.lang.String"/>
	<field name="diemTongKetLop10" class="java.lang.String"/>
	<field name="hocLucLop11" class="java.lang.String"/>
	<field name="hanhKiemLop11" class="java.lang.String"/>
	<field name="diemTongKetLop11" class="java.lang.String"/>
	<field name="hocLucLop12" class="java.lang.String"/>
	<field name="hanhKiemLop12" class="java.lang.String"/>
	<field name="diemTongKetLop12" class="java.lang.String"/>
	<field name="nguoiLienHe" class="java.lang.String"/>
	<field name="diemThiTHPT" class="java.lang.String"/>
	<field name="diemThiCaoDang" class="java.lang.String"/>
	<field name="doatGiai" class="java.lang.String"/>

	<detail>
		<band height="842" splitType="Stretch">
			<property name="com.jaspersoft.studio.unit.height" value="px"/>

			<rectangle>
				<reportElement x="480" y="18" width="80" height="18" uuid="a0f4b0c0-7df8-4db5-a2d1-f9c2c3c1b2a1"/>
			</rectangle>
			<staticText>
				<reportElement x="480" y="18" width="80" height="18" uuid="b1b2c3d4-e5f6-4a7b-8c9d-0e1f2a3b4c5d"/>
				<textElement textAlignment="Center" verticalAlignment="Middle">
					<font size="10" isBold="true"/>
				</textElement>
				<text><![CDATA[Mẫu số 01]]></text>
			</staticText>

			<staticText>
				<reportElement x="80" y="42" width="435" height="18" uuid="c2d3e4f5-6a7b-4c8d-9e0f-1a2b3c4d5e6f"/>
				<textElement textAlignment="Center" verticalAlignment="Middle">
					<font size="13" isBold="true"/>
				</textElement>
				<text><![CDATA[CỘNG HOÀ XÃ HỘI CHỦ NGHĨA VIỆT NAM]]></text>
			</staticText>
			<staticText>
				<reportElement x="140" y="60" width="315" height="18" uuid="d3e4f5a6-7b8c-4d9e-0f1a-2b3c4d5e6f70"/>
				<textElement textAlignment="Center" verticalAlignment="Middle">
					<font size="13" isBold="true" isUnderline="true"/>
				</textElement>
				<text><![CDATA[Độc lập - Tự do - Hạnh phúc]]></text>
			</staticText>

			<textField isBlankWhenNull="true">
				<reportElement x="140" y="82" width="315" height="16" uuid="e4f5a6b7-8c9d-4e0f-1a2b-3c4d5e6f7081"/>
				<textElement textAlignment="Center" verticalAlignment="Middle">
					<font size="11" isItalic="true"/>
				</textElement>
				<textFieldExpression><![CDATA[
					($F{diaDanhName} == null || $F{diaDanhName}.trim().length() == 0 || "undefined".equalsIgnoreCase($F{diaDanhName}.trim()) || "null".equalsIgnoreCase($F{diaDanhName}.trim()))
						? "Địa danh, ngày ..... tháng ..... năm ....."
						: ($F{diaDanhName} + ", ngày ..... tháng ..... năm .....")
				]]></textFieldExpression>
			</textField>

			<staticText>
				<reportElement x="60" y="106" width="475" height="20" uuid="f5a6b7c8-9d0e-4f1a-2b3c-4d5e6f708192"/>
				<textElement textAlignment="Center" verticalAlignment="Middle">
					<font size="14" isBold="true"/>
				</textElement>
				<text><![CDATA[ĐƠN ĐĂNG KÝ XÉT TUYỂN HỌC THEO CHẾ ĐỘ CỬ TUYỂN]]></text>
			</staticText>

			<textField isBlankWhenNull="true">
				<reportElement x="60" y="132" width="475" height="16" uuid="06b7c8d9-0e1f-4a2b-3c4d-5e6f708192a3"/>
				<textElement textAlignment="Center" verticalAlignment="Middle">
					<font size="11" isItalic="true"/>
				</textElement>
				<textFieldExpression><![CDATA[
					"Kính gửi: Ban Tuyển sinh quân sự " +
					(
						($F{banTuyenSinhName} == null || $F{banTuyenSinhName}.trim().length() == 0 || "undefined".equalsIgnoreCase($F{banTuyenSinhName}.trim()) || "null".equalsIgnoreCase($F{banTuyenSinhName}.trim()))
							? "........"
							: $F{banTuyenSinhName}
					)
				]]></textFieldExpression>
			</textField>

			<textField>
				<reportElement x="60" y="160" width="495" height="16" uuid="17c8d9e0-1f2a-4b3c-5d6e-708192a3b4c5"/>
				<textElement textAlignment="Left" verticalAlignment="Middle"/>
				<textFieldExpression><![CDATA[
					"1. Họ và tên người đăng ký học: " +
					(
						($F{hoVaTen} == null || $F{hoVaTen}.trim().length() == 0 || "undefined".equalsIgnoreCase($F{hoVaTen}.trim()) || "null".equalsIgnoreCase($F{hoVaTen}.trim()))
							? ".............................................................................."
							: $F{hoVaTen}
					)
					+ "      Nam/nữ: " +
					(
						($F{gender} == null || $F{gender}.trim().length() == 0 || "undefined".equalsIgnoreCase($F{gender}.trim()) || "null".equalsIgnoreCase($F{gender}.trim()))
							? "....."
							: ("0".equals($F{gender}.trim()) ? "Nam" : ("1".equals($F{gender}.trim()) ? "Nữ" : $F{gender}))
					)
				]]></textFieldExpression>
			</textField>

			<textField>
				<reportElement x="60" y="180" width="495" height="16" uuid="28d9e0f1-2a3b-4c5d-6e70-8192a3b4c5d6"/>
				<textElement textAlignment="Left" verticalAlignment="Middle"/>
				<textFieldExpression><![CDATA[
					"2. Ngày, tháng, năm sinh: " +
					(
						($F{birthDate} == null || $F{birthDate}.trim().length() == 0 || "undefined".equalsIgnoreCase($F{birthDate}.trim()) || "null".equalsIgnoreCase($F{birthDate}.trim()))
							? ".................................."
							: $F{birthDate}
					)
					+ "      CCCD/CMND/Hộ chiếu: " +
					(
						($F{soCCCD} == null || $F{soCCCD}.trim().length() == 0 || "undefined".equalsIgnoreCase($F{soCCCD}.trim()) || "null".equalsIgnoreCase($F{soCCCD}.trim()))
							? "................................."
							: $F{soCCCD}
					)
				]]></textFieldExpression>
			</textField>

			<textField>
				<reportElement positionType="Float" x="60" y="200" width="495" height="16" uuid="39e0f1a2-3b4c-4d5e-6f70-8192a3b4c5d7"/>
				<textElement textAlignment="Left" verticalAlignment="Middle"/>
				<textFieldExpression><![CDATA[
					"3. Dân tộc: " +
					(
						($F{danTocName} == null || $F{danTocName}.trim().length() == 0 || "undefined".equalsIgnoreCase($F{danTocName}.trim()) || "null".equalsIgnoreCase($F{danTocName}.trim()))
							? "............................................................."
							: $F{danTocName}
					)
					+ "      Tôn giáo: " +
					(
						($F{tonGiaoName} == null || $F{tonGiaoName}.trim().length() == 0 || "undefined".equalsIgnoreCase($F{tonGiaoName}.trim()) || "null".equalsIgnoreCase($F{tonGiaoName}.trim()))
							? ".................................................................."
							: $F{tonGiaoName}
					)
				]]></textFieldExpression>
			</textField>

			<textField isStretchWithOverflow="true">
				<reportElement positionType="Float" x="60" y="220" width="495" height="28" uuid="4af1a2b3-4c5d-4e6f-7081-92a3b4c5d6e7"/>
				<textElement textAlignment="Left" verticalAlignment="Top"/>
				<textFieldExpression><![CDATA[
					"4. Địa chỉ thường trú (ghi rõ thôn, bản, xã, tỉnh): " +
					(
						($F{diaChiChiTiet} == null || $F{diaChiChiTiet}.trim().length() == 0 || "undefined".equalsIgnoreCase($F{diaChiChiTiet}.trim()) || "null".equalsIgnoreCase($F{diaChiChiTiet}.trim()))
							? "................................................................................................................................................................"
							: (
								$F{diaChiChiTiet}
								+ (($F{wardName} != null && $F{wardName}.trim().length() > 0 && !"undefined".equalsIgnoreCase($F{wardName}.trim()) && !"null".equalsIgnoreCase($F{wardName}.trim())) ? (", " + $F{wardName}) : "")
								+ (($F{cityName} != null && $F{cityName}.trim().length() > 0 && !"undefined".equalsIgnoreCase($F{cityName}.trim()) && !"null".equalsIgnoreCase($F{cityName}.trim())) ? (", " + $F{cityName}) : "")
							)
					)
				]]></textFieldExpression>
			</textField>

			<textField>
				<reportElement positionType="Float" x="60" y="258" width="495" height="16" uuid="5b02c3d4-5e6f-4708-8192-a3b4c5d6e7f8"/>
				<textElement textAlignment="Left" verticalAlignment="Middle"/>
				<textFieldExpression><![CDATA[
					"5. Ngành dự định xin học: " +
					(
						($F{nganhHocName} == null || $F{nganhHocName}.trim().length() == 0 || "undefined".equalsIgnoreCase($F{nganhHocName}.trim()) || "null".equalsIgnoreCase($F{nganhHocName}.trim()))
							? ".............................................................................."
							: $F{nganhHocName}
					)
				]]></textFieldExpression>
			</textField>
			<textField>
				<reportElement positionType="Float" x="60" y="278" width="495" height="16" uuid="6c13d4e5-6f70-4819-92a3-b4c5d6e7f809"/>
				<textElement textAlignment="Left" verticalAlignment="Middle"/>
				<textFieldExpression><![CDATA[
					"   Trình độ đào tạo (ĐH, CĐ, TC): " +
					(
						($F{trinhDoDaoTaoCode} == null || $F{trinhDoDaoTaoCode}.trim().length() == 0 || "undefined".equalsIgnoreCase($F{trinhDoDaoTaoCode}.trim()) || "null".equalsIgnoreCase($F{trinhDoDaoTaoCode}.trim()))
							? ".............................................................................."
							: $F{trinhDoDaoTaoCode}
					)
				]]></textFieldExpression>
			</textField>

			<textField>
				<reportElement positionType="Float" x="60" y="300" width="495" height="16" uuid="7d24e5f6-7081-492a-a3b4-c5d6e7f8091a"/>
				<textElement textAlignment="Left" verticalAlignment="Middle"/>
				<textFieldExpression><![CDATA[
					"6. Thuộc đối tượng ưu tiên: " +
					(
						($F{doiTuongUuTienName} != null && $F{doiTuongUuTienName}.trim().length() > 0 && !"undefined".equalsIgnoreCase($F{doiTuongUuTienName}.trim()) && !"null".equalsIgnoreCase($F{doiTuongUuTienName}.trim()))
							? $F{doiTuongUuTienName}
							: (
								($F{doiTuongUuTien} != null && $F{doiTuongUuTien}.trim().length() > 0 && !"undefined".equalsIgnoreCase($F{doiTuongUuTien}.trim()) && !"null".equalsIgnoreCase($F{doiTuongUuTien}.trim()))
									? $F{doiTuongUuTien}
									: ".............................................................................."
							)
					)
				]]></textFieldExpression>
			</textField>

			<textField>
				<reportElement positionType="Float" x="60" y="320" width="495" height="16" uuid="8e35f607-8192-4a3b-b4c5-d6e7f8091a2b"/>
				<textElement textAlignment="Left" verticalAlignment="Middle"/>
				<textFieldExpression><![CDATA[
					"7. Đã tốt nghiệp: " +
					(
						($F{daTotNghiep} == null || $F{daTotNghiep}.trim().length() == 0 || "undefined".equalsIgnoreCase($F{daTotNghiep}.trim()) || "null".equalsIgnoreCase($F{daTotNghiep}.trim()))
							? ".............................................................................."
							: $F{daTotNghiep}
					)
				]]></textFieldExpression>
			</textField>
			<textField>
				<reportElement positionType="Float" x="60" y="340" width="495" height="16" uuid="9f460718-92a3-4b4c-c5d6-e7f8091a2b3c"/>
				<textElement textAlignment="Left" verticalAlignment="Middle"/>
				<textFieldExpression><![CDATA[
					"   Ngày, tháng, năm dự thi tốt nghiệp: " +
					(
						($F{ngayThiTotNghiep} == null || $F{ngayThiTotNghiep}.trim().length() == 0 || "undefined".equalsIgnoreCase($F{ngayThiTotNghiep}.trim()) || "null".equalsIgnoreCase($F{ngayThiTotNghiep}.trim()))
							? ".............................................................................."
							: $F{ngayThiTotNghiep}
					)
				]]></textFieldExpression>
			</textField>

			<textField>
				<reportElement positionType="Float" x="60" y="362" width="495" height="16" uuid="a0571829-a3b4-4c5d-d6e7-f8091a2b3c4d"/>
				<textElement textAlignment="Left" verticalAlignment="Middle"/>
				<textFieldExpression><![CDATA[
					"8. Xếp loại năm cuối cấp/ cuối khóa: Học lực: " +
					(
						($F{hocLucLop12} == null || $F{hocLucLop12}.trim().length() == 0 || "undefined".equalsIgnoreCase($F{hocLucLop12}.trim()) || "null".equalsIgnoreCase($F{hocLucLop12}.trim()))
							? "....."
							: $F{hocLucLop12}
					)
					+ "   Hạnh kiểm (rèn luyện): " +
					(
						($F{hanhKiemLop12} == null || $F{hanhKiemLop12}.trim().length() == 0 || "undefined".equalsIgnoreCase($F{hanhKiemLop12}.trim()) || "null".equalsIgnoreCase($F{hanhKiemLop12}.trim()))
							? "....."
							: $F{hanhKiemLop12}
					)
				]]></textFieldExpression>
			</textField>

			<textField isStretchWithOverflow="true">
				<reportElement positionType="Float" x="60" y="384" width="495" height="32" uuid="b168293a-b4c5-4d6e-e7f8-091a2b3c4d5e"/>
				<textElement textAlignment="Left" verticalAlignment="Top"/>
				<textFieldExpression><![CDATA[
					"9. Điểm các môn thi THPT: " +
					(
						($F{diemThiTHPT} == null || $F{diemThiTHPT}.trim().length() == 0 || "undefined".equalsIgnoreCase($F{diemThiTHPT}.trim()) || "null".equalsIgnoreCase($F{diemThiTHPT}.trim()) || "[]".equals($F{diemThiTHPT}.trim()))
							? "................................................................................................................................................................"
							: $F{diemThiTHPT}
								.replaceAll("\\[\\{", "").replaceAll("\\}\\]", "")
								.replaceAll("\\},\\{", "; ")
								.replaceAll("\"", "")
								.replaceAll("(?:[^;]*?)tenMon:([^,;]+)(?:[^;]*?)diem:([^,;]+)(?:[^;]*)", "$1: $2")
								.replaceAll("(?:[^;]*?)diem:([^,;]+)(?:[^;]*?)tenMon:([^,;]+)(?:[^;]*)", "$2: $1")
					)
				]]></textFieldExpression>
			</textField>

			<textField isStretchWithOverflow="true">
				<reportElement positionType="Float" x="60" y="418" width="495" height="18" uuid="c2793a4b-c5d6-4e7f-8091-a2b3c4d5e6f7"/>
				<textElement textAlignment="Left" verticalAlignment="Top"/>
				<textFieldExpression><![CDATA[
					"10. Điểm thi đại học, cao đẳng, trung cấp (nếu có): " +
					(
						($F{diemThiCaoDang} == null || $F{diemThiCaoDang}.trim().length() == 0 || "undefined".equalsIgnoreCase($F{diemThiCaoDang}.trim()) || "null".equalsIgnoreCase($F{diemThiCaoDang}.trim()) || "[]".equals($F{diemThiCaoDang}.trim()))
							? "................................................................................................................................................................"
							: $F{diemThiCaoDang}
								.replaceAll("\\[\\{", "").replaceAll("\\}\\]", "")
								.replaceAll("\\},\\{", "; ")
								.replaceAll("\"", "")
								.replaceAll("(?:[^;]*?)tenMon:([^,;]+)(?:[^;]*?)diem:([^,;]+)(?:[^;]*)", "$1: $2")
								.replaceAll("(?:[^;]*?)diem:([^,;]+)(?:[^;]*?)tenMon:([^,;]+)(?:[^;]*)", "$2: $1")
					)
				]]></textFieldExpression>
			</textField>

			<textField>
				<reportElement positionType="Float" x="60" y="440" width="495" height="16" uuid="d38a4b5c-d6e7-4f80-91a2-b3c4d5e6f708"/>
				<textElement textAlignment="Left" verticalAlignment="Middle"/>
				<textFieldExpression><![CDATA[
					"11. Đoạt giải (nếu có): " +
					(
						($F{doatGiai} == null || $F{doatGiai}.trim().length() == 0 || "undefined".equalsIgnoreCase($F{doatGiai}.trim()) || "null".equalsIgnoreCase($F{doatGiai}.trim()) || "[]".equals($F{doatGiai}.trim()))
							? ("................................." + "  môn " + ".................................")
							: $F{doatGiai}
								.replaceAll("\\[\\{", "").replaceAll("\\}\\]", "")
								.replaceAll("\\},\\{", "; ")
								.replaceAll("\"", "")
								.replaceAll("(?:[^;]*?)monThi:([^,;]+)(?:[^;]*?)tenGiai:([^,;]+)(?:[^;]*?)nam:([^,;]+)(?:[^;]*)", "Giải $2 (Môn: $1, Năm: $3)")
								.replaceAll("(?:[^;]*?)monThi:([^,;]+)(?:[^;]*?)nam:([^,;]+)(?:[^;]*?)tenGiai:([^,;]+)(?:[^;]*)", "Giải $3 (Môn: $1, Năm: $2)")
								.replaceAll("(?:[^;]*?)tenGiai:([^,;]+)(?:[^;]*?)monThi:([^,;]+)(?:[^;]*?)nam:([^,;]+)(?:[^;]*)", "Giải $1 (Môn: $2, Năm: $3)")
								.replaceAll("(?:[^;]*?)tenGiai:([^,;]+)(?:[^;]*?)nam:([^,;]+)(?:[^;]*?)monThi:([^,;]+)(?:[^;]*)", "Giải $1 (Môn: $3, Năm: $2)")
								.replaceAll("(?:[^;]*?)nam:([^,;]+)(?:[^;]*?)monThi:([^,;]+)(?:[^;]*?)tenGiai:([^,;]+)(?:[^;]*)", "Giải $3 (Môn: $2, Năm: $1)")
								.replaceAll("(?:[^;]*?)nam:([^,;]+)(?:[^;]*?)tenGiai:([^,;]+)(?:[^;]*?)monThi:([^,;]+)(?:[^;]*)", "Giải $2 (Môn: $3, Năm: $1)")
					)
				]]></textFieldExpression>
			</textField>
			<staticText>
				<reportElement positionType="Float" x="60" y="458" width="495" height="16" uuid="e49b5c6d-e7f8-4091-a2b3-c4d5e6f70819"/>
				<textElement textAlignment="Left" verticalAlignment="Middle"/>
				<text><![CDATA[kỳ thi học sinh giỏi hoặc kỳ thi Olympic: .......................  năm: .......................]]></text>
			</staticText>

			<staticText>
				<reportElement positionType="Float" x="60" y="492" width="495" height="30" uuid="f5ac6d7e-f809-41a2-b3c4-d5e6f708192a"/>
				<textElement textAlignment="Justified" verticalAlignment="Top"/>
				<text><![CDATA[Tôi xin cam đoan những lời khai trên là đúng sự thật. Nếu sai, tôi xin chịu trách nhiệm xử lý theo quy định của pháp luật.]]></text>
			</staticText>
			<staticText>
				<reportElement positionType="Float" x="60" y="524" width="495" height="45" uuid="06bd7e8f-091a-42b3-c4d5-e6f708192a3b"/>
				<textElement textAlignment="Justified" verticalAlignment="Top" markup="styled"/>
				<text><![CDATA[<style isBold="true">Nếu được chấp nhận, tôi xin cam kết:</style> Chấp hành đầy đủ các quy định của Nhà nước đối với người học theo chế độ cử tuyển, sau khi tốt nghiệp chấp hành nghiêm sự bố trí việc làm của Bộ Quốc phòng.]]></text>
			</staticText>

			<textField isStretchWithOverflow="true" isBlankWhenNull="true">
				<reportElement positionType="Float" x="60" y="574" width="495" height="28" uuid="17ce8f90-1a2b-43c4-d5e6-f708192a3b4c"/>
				<textElement textAlignment="Left" verticalAlignment="Top"/>
				<textFieldExpression><![CDATA[
					"Khi cần, báo tin cho ai, địa chỉ, điện thoại (nếu có): " +
					(
						($F{nguoiLienHe} == null || $F{nguoiLienHe}.trim().length() == 0 || "undefined".equalsIgnoreCase($F{nguoiLienHe}.trim()) || "null".equalsIgnoreCase($F{nguoiLienHe}.trim()))
							? "................................................................................................................................................................"
							: $F{nguoiLienHe}
					)
				]]></textFieldExpression>
			</textField>

			<staticText>
				<reportElement positionType="Float" x="335" y="640" width="220" height="18" uuid="28df901a-2b3c-44d5-e6f7-08192a3b4c5d"/>
				<textElement textAlignment="Center" verticalAlignment="Middle">
					<font size="12" isBold="true"/>
				</textElement>
				<text><![CDATA[NGƯỜI ĐĂNG KÝ HỌC]]></text>
			</staticText>
			<staticText>
				<reportElement positionType="Float" x="335" y="658" width="220" height="15" uuid="39e0a12b-3c4d-45e6-f708-192a3b4c5d6e"/>
				<textElement textAlignment="Center" verticalAlignment="Middle">
					<font size="10" isItalic="true"/>
				</textElement>
				<text><![CDATA[(Ký, ghi rõ họ tên)]]></text>
			</staticText>
		</band>
	</detail>
</jasperReport>
