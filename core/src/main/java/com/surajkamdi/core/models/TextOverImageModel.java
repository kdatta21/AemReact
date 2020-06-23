package com.surajkamdi.core.models;

import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Exporter;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;
import javax.annotation.Nonnull;

import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ExporterConstants;

@Model(adaptables = SlingHttpServletRequest.class,
	resourceType = TextOverImageModel.RESOURCE_TYPE, 
	adapters = {TextOverImageModel.class,ComponentExporter.class },
	defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME,
	extensions = ExporterConstants.SLING_MODEL_EXTENSION)
public class TextOverImageModel implements ComponentExporter {

	protected static final String RESOURCE_TYPE = "my-aem-project/components/content/textOverImage";

	@ValueMapValue(name = "imgPath")
	private String imgPath;

	@ValueMapValue(name = "imgText")
	private String imgText;

	public String getImgPath() {
		return imgPath;
	}

	public String getImgText() {
		return imgText;
	}
	@Nonnull
	@Override
	public String getExportedType() {
		// TODO Auto-generated method stub
		return RESOURCE_TYPE;
	}

}
