<xsl:stylesheet version="2.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" >
  <xsl:output method="text" omit-xml-declaration="yes" encoding="UTF-8" indent="no"/>
  <xsl:template match="*">
    <!--text <xsl:value-of select="local-name()"/> 
    {latLng: [48.121858,17.113931], data: {name: "Krčma Kométa", desc: "dafak faslkfj asldfjasf"}},

     <Placemark>
    <name>slovenský veslársky klub</name>
    <description><![CDATA[]]></description>
    <styleUrl>#style154</styleUrl>
    <Point>
      <coordinates>17.101851,48.136665</coordinates>
    </Point>
  </Placemark> 
  <Style id="style154">
    <IconStyle>
      <Icon>
        <href>http://maps.gstatic.com/mapfiles/ms2/micons/green-dot.png</href>
      </Icon>
    </IconStyle>
  </Style>
-->
<xsl:for-each select="./Placemark">
  <xsl:variable name="styleId" select="substring(styleUrl, 2)"/>
  <xsl:variable name="category" select="//Style[@id=$styleId]/IconStyle/Icon/href"/>

  <xsl:variable name="lng" select="substring-before(Point/coordinates, ',')"/>
  <xsl:variable name="lat" select="substring-after(Point/coordinates, ',')"/>
  <!-- <xsl:value-of select="$category"/>  -->

  <xsl:if test="$category = 'http://maps.gstatic.com/mapfiles/ms2/micons/blue-dot.png'">
    <xsl:value-of select="concat('{latLng: [', $lat, ',', $lng ,'], data: {name: &quot;', name, '&quot;, desc: &quot;', description, '&quot;')" />
    <!-- <xsl:if test="not(description[text()] = '&lt;![CDATA[]]&gt;')"><xsl:value-of select="concat(', desc: &quot;', description, '&quot;')"/></xsl:if>  -->
    <xsl:text>}},&#xA;</xsl:text>
  </xsl:if>
</xsl:for-each>
</xsl:template>
</xsl:stylesheet>   
