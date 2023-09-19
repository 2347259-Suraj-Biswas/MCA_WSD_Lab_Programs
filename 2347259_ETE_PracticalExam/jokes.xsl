<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

  <xsl:template match="jokes">
    <html>
      <head>
        <title>Jokes</title>
        <style>
          table {
            border-collapse: collapse;
            width: 100%;
          }
          th, td {
            border: 1px solid black;
            padding: 8px;
            text-align: left;
          }
          th {
            background-color: #f2f2f2;
          }
        </style>
      </head>
      <body>
        <h1>Jokes</h1>
        <table>
          <tr>
            <th>Category</th>
            <th>Jokes</th>
          </tr>
          <xsl:apply-templates select="joke"/>
        </table>
      </body>
    </html>
  </xsl:template>

  <xsl:template match="joke">
    <tr>
      <td><xsl:value-of select="Category"/></td>
      <td><xsl:value-of select="Joke"/></td>
    </tr>
  </xsl:template>

</xsl:stylesheet>
