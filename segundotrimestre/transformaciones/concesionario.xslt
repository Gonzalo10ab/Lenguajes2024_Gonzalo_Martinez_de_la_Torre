<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output method="html" indent="yes" />
    
    <xsl:template match="/">
        <html>
        <head>
            <title>Estado del Concesionario</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    color: darkgreen;
                    background-color: #ffffff;
                    margin: 20px;
                }
                h1, h2 {
                    border-bottom: 2px solid darkgreen;
                    padding-bottom: 5px;
                }
                .container {
                    width: 80%;
                    margin: auto;
                }
                table {
                    width: 100%;
                    border-collapse: collapse;
                    margin-top: 20px;
                }
                th, td {
                    padding: 10px;
                    text-align: left;
                }
                th {
                    border-bottom: 2px solid darkgreen;
                    font-weight: bold;
                }
                td {
                    border-bottom: 1px solid darkgreen;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>Estado del Concesionario</h1>
                <p><strong>Tenemos un total de <xsl:value-of select="count(concesionario/coche)"/> vehículos</strong></p>
                <p><strong>Valorados en <xsl:value-of select="sum(concesionario/coche/precio)"/> Euros (sin IVA)</strong></p>
                <h2>Listado de vehículos ordenados por marca</h2>
                <table>
                    <tr>
                        <th>Marca</th>
                        <th>Matricula</th>
                        <th>Metalizado</th>
                    </tr>
                    <xsl:for-each select="concesionario/coche">
                        <xsl:sort select="marca"/>
                        <tr>
                            <td><xsl:value-of select="marca"/></td>
                            <td><xsl:value-of select="@matricula"/></td>
                            <td>
                                <xsl:choose>
                                    <xsl:when test="color/@metalizado = 'S'">Metalizado</xsl:when>
                                    <xsl:otherwise>No metalizado</xsl:otherwise>
                                </xsl:choose>
                            </td>
                        </tr>
                    </xsl:for-each>
                </table>
            </div>
        </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
