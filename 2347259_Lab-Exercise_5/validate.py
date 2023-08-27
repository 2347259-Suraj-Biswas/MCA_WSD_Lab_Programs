from lxml import etree

xml_file = "products.xml"
xsl_file = "transform.xsl"
xsd_file = "product_schema.xsd"

xslt = etree.parse(xsl_file)
transform = etree.XSLT(xslt)
xml_data = etree.parse(xml_file)
html_output = transform(xml_data)

html_output_filename = "transformed.html"
with open(html_output_filename, "wb") as f:
    f.write(etree.tostring(html_output, pretty_print=True))

schema = etree.XMLSchema(file=xsd_file)
if schema.validate(xml_data):
    print("XML validation successful.")
else:
    print("XML validation errors:")
    for error in schema.error_log:
        print(error)
