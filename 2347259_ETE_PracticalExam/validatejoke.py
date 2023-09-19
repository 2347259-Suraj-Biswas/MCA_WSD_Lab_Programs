from lxml import etree

xml_file = "jokes.xml"
xsd_file = "jokes.xsd"
xsl_file = "jokes.xsl"

xslt = etree.parse(xsl_file)
transform = etree.XSLT(xslt)
xml_data = etree.parse(xml_file)
html_output = transform(xml_data)

html_output_filename = "jokesdisplay.html"
with open(html_output_filename, "wb") as f:
    f.write(etree.tostring(html_output, pretty_print=True))

schema = etree.XMLSchema(file=xsd_file)
if schema.validate(xml_data):
    print("XML Validation Successful")
else:
    print("XML Validation Failed")
    for error in schema.error_log:
        print(error)