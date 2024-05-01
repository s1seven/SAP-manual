import{_ as o,r as i,o as r,c,e as a,b as e,d as t,f as d,a as n}from"./app-BDj_ubsO.js";const p="/assets/figure_2-DsppowoF.png",l="/assets/figure_3-DSmcurI6.png",u="/assets/mapping_method-f-L42NiE.png",m="/assets/figure_22-C-Y89Efh.png",g="/assets/figure_5-DrSOGcVC.png",h="/assets/figure_6-C3_g6qxs.png",f="/assets/steel_mill-DAXeX5Zo.png",v="/assets/figure_10-B2mzyf4q.png",b="/assets/figure_23-2XJejOai.png",S={},w=e("h1",{id:"certificate-processing",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#certificate-processing","aria-hidden":"true"},"#"),t(" Certificate Processing")],-1),k=e("ul",null,[e("li",null,[e("a",{href:"#certificate-processing"},"Certificate Processing"),e("ul",null,[e("li",null,[e("a",{href:"#outbound-process"},"Outbound Process"),e("ul",null,[e("li",null,[e("a",{href:"#preview"},"Preview")])])]),e("li",null,[e("a",{href:"#inbound-process"},"Inbound process")])])])],-1),_=n(`<h2 id="outbound-process" tabindex="-1"><a class="header-anchor" href="#outbound-process" aria-hidden="true">#</a> Outbound Process</h2><div class="language-mermaid line-numbers-mode" data-ext="mermaid"><pre class="language-mermaid"><code><span class="token comment">%%{init: {&#39;theme&#39;:&#39;forest&#39;}}%%</span>
<span class="token keyword">sequenceDiagram</span>
    <span class="token keyword">autonumber</span>
    actor Issuer as Certificate Issuer
    <span class="token keyword">participant</span> SAP Connector
    <span class="token keyword">participant</span> S1SEVEN
    actor Receiver as Certificate Receiver
    Issuer<span class="token arrow operator">-&gt;&gt;</span>SAP Connector<span class="token operator">:</span> trigger certificate issuing process
    SAP Connector<span class="token arrow operator">-&gt;&gt;</span>SAP Connector<span class="token operator">:</span> start certificate workflow
    SAP Connector<span class="token arrow operator">-&gt;&gt;</span>SAP Connector<span class="token operator">:</span> map customer specific data to JSON certificate
    SAP Connector<span class="token arrow operator">-&gt;&gt;</span>S1SEVEN<span class="token operator">:</span> send certificate to notarization
    S1SEVEN<span class="token arrow operator">-&gt;&gt;</span>S1SEVEN<span class="token operator">:</span> validate JSON certificate against JSON Schema
    S1SEVEN<span class="token arrow operator">-&gt;&gt;</span>S1SEVEN<span class="token operator">:</span> notarize JSON certificate on Blockchain
    S1SEVEN<span class="token arrow operator">-&gt;&gt;</span>SAP Connector<span class="token operator">:</span> notify about notarization success
    S1SEVEN<span class="token arrow operator">-&gt;&gt;</span>Receiver<span class="token operator">:</span> send JSON certificate <span class="token text string">(optional PDF)</span>
    SAP Connector<span class="token arrow operator">-&gt;&gt;</span>SAP Connector<span class="token operator">:</span> store notarized JSON to SAP object
    SAP Connector<span class="token arrow operator">-&gt;&gt;</span>Issuer<span class="token operator">:</span> notify about success
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Following, the process of notarizing a certificate proving the quality of produced materials in the mill industry is described. S1SEVEN DMP is used to provide the data in the correct format for the S1SEVEN stack to notarize it via blockchain. This notarization process can be carried out for various data objects. Here, a specific message type (certificate) is linked to an outbound delivery. Please note that this is just one example of using S1SEVEN DMP. All the different objects in an SAP system can be used to act as a basis for the certificate.</p><p><img src="`+p+'" alt="Outbound message" title="Outbound message"></p><p><img src="'+l+'" alt="Delivery workflows" title="Delivery workflows"></p>',5),E={href:"https://materialidentity.org",target:"_blank",rel:"noopener noreferrer"},N=e("img",{src:u,alt:"Mapping method example showing JSON schema type",title:"Mapping method example showing JSON schema type"},null,-1),P=n('<p>In the &quot;Posting&quot; step, the S1SEVEN stack is addressed, checking whether the available data has already been notarized. If not, S1SEVEN DMP waits to receive notarization information from the S1SEVEN stack.</p><p>The notarization confirmation of a certificate can be triggered by:</p><ul><li>MQTT event for topic <code>notarize_one</code>, which is the recommendation as it enables realtime processing. No middleware will be needed and is running/integrating with S1SEVEN out of the box.</li><li>by manually calling endpoint <code>/ubc/s1seven/certificate/notarize</code>, for test purposes in Swagger UI (transaction <code>/UBC/SWAGGER</code>) and/or if MQTT is not an option (e.g., forced to use middleware)</li></ul><p><img src="'+m+'" alt="Testing Certificate notarize endpoint" title="Testing Certificate notarize endpoint"></p><p>Within seconds, the notarization is processed, and all steps are recorded: <img src="'+g+'" alt="Generic Object Service Notarization" title="Generic Object Service Notarization"></p><p>In the screen above, the notarization as well as other process steps indicate the status <code>Completed</code>. The completed status indicates the successful execution of events based on the notarization.</p><p>In the next screen the PDF generated from the JSON is attached to an outbound delivery as a post-processing event. Please note that this step is optional and customer-specific. PDF data can be requested at any time, as S1SEVEN DMP stores the notarized JSON data. This post processing step can be activated quite easily. <img src="'+h+`" alt="Attachment list" title="Attachment list"></p><p>The whole notarization process is highly customizable by a customer and can be adapted to its needs.</p><h3 id="preview" tabindex="-1"><a class="header-anchor" href="#preview" aria-hidden="true">#</a> Preview</h3><p>In addition to the regular certficate output, there is the option to preview the printing of certificate as a PDF prior to the notarization. By pressing the <code>Print preview</code> button all data for the certificate are gathered, transformed into JSON format and sent to S1SEVEN stack for PDF rendering. The visualized preview &quot;Demo certificate&quot; contains the same information as the notarized document on the blockchain.</p><div class="language-mermaid line-numbers-mode" data-ext="mermaid"><pre class="language-mermaid"><code><span class="token comment">%%{init: {&#39;theme&#39;:&#39;forest&#39;}}%%</span>
<span class="token keyword">sequenceDiagram</span>
    <span class="token keyword">autonumber</span>
    actor Issuer as Certificate Issuer
    <span class="token keyword">participant</span> SAP Connector
    <span class="token keyword">participant</span> S1SEVEN
    Issuer<span class="token arrow operator">-&gt;&gt;</span>SAP Connector<span class="token operator">:</span> trigger certificate preview, &lt;br&gt;e.g. by print preview in outbound delivery
    SAP Connector<span class="token arrow operator">-&gt;&gt;</span>SAP Connector<span class="token operator">:</span> map customer specific data to JSON certificate
    SAP Connector<span class="token arrow operator">-&gt;&gt;</span>S1SEVEN<span class="token operator">:</span> send certificate to rendering
    S1SEVEN<span class="token arrow operator">-&gt;&gt;</span>S1SEVEN<span class="token operator">:</span> validate JSON certificate against JSON Schema
    S1SEVEN<span class="token arrow operator">-&gt;&gt;</span>S1SEVEN<span class="token operator">:</span> render PDF out of JSON certificate
    S1SEVEN<span class="token arrow operator">-&gt;&gt;</span>SAP Connector<span class="token operator">:</span> send PDF data synchronously
    SAP Connector<span class="token arrow operator">-&gt;&gt;</span>Issuer<span class="token operator">:</span> open Preview window for PDF
    Issuer<span class="token arrow operator">-&gt;&gt;</span>Issuer<span class="token operator">:</span> view and evaluate PDF
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Example PDF document: <img src="`+f+'" alt="Demo certificate" title="Demo certififcate"></p><h2 id="inbound-process" tabindex="-1"><a class="header-anchor" href="#inbound-process" aria-hidden="true">#</a> Inbound process</h2><p><img src="'+v+'" alt="Inbound workflow" title="Inbound workflow"></p><p>The inbound processing of a certificate can be triggered by:</p><ul><li>MQTT event for topic <code>receive_one</code>, which is the recommendation as it enables realtime processing. No middleware will be needed and is running/integrating with S1SEVEN out of the box.</li><li>by manually calling endpoint <code>/ubc/s1seven/certificate/inbound</code>, for test purposes in Swagger UI (transaction <code>/UBC/SWAGGER</code>) and/or if MQTT is not an option (e.g., forced to use middleware) <img src="'+b+'" alt="Testing Certificate inbound endpoint" title="Testing Certificate inbound endpoint"></li></ul><p>The certificate implementation will be derived from the given schema within payload. Dedicated process methods are called and can be implemented customer-specific.</p>',17);function y(C,A){const s=i("ExternalLinkIcon");return r(),c("div",null,[w,a(' @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=3 orderedList=true} '),a(" code_chunk_output "),k,a(" /code_chunk_output "),_,e("p",null,[t('By starting the printing process (button "Print") the workflow of UBC.flow is triggered. In this case, the workflow for the selected item starts and can be visualized in GOS (Generic Object Service), where all processed steps are recorded. For each step, status, result as well as creation and end date/time are listed. First, the "Mapping" process is carried out which is responsible for translating the data object information into JSON schema format. This data mapping can be sourced individually from SAP standard, variant configurator, or any kind of Master Data Management tool. The JSON schema as described at '),e("a",E,[t("Material Identity"),d(s)]),t(" defines the target format data to be mapped into. ABAP types will be generated for every JSON schema which is used to provide a very well-known environment for every ABAP developer. "),N]),P])}const O=o(S,[["render",y],["__file","index.html.vue"]]);export{O as default};
