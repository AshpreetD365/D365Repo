<ImportExportXml xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
  <Entities>
    <Entity>
      <Name LocalizedName="Assessment" OriginalName="Assessment">mcapcoe_Assessment</Name>
      <EntityInfo>
        <entity Name="mcapcoe_Assessment">
          <attributes>
            <attribute PhysicalName="mcapcoe_Description">
              <Type>nvarchar</Type>
              <Name>mcapcoe_description</Name>
              <LogicalName>mcapcoe_description</LogicalName>
              <RequiredLevel>none</RequiredLevel>
              <DisplayMask>ValidForAdvancedFind|ValidForForm|ValidForGrid</DisplayMask>
              <ImeMode>auto</ImeMode>
              <ValidForUpdateApi>1</ValidForUpdateApi>
              <ValidForReadApi>1</ValidForReadApi>
              <ValidForCreateApi>1</ValidForCreateApi>
              <IsCustomField>1</IsCustomField>
              <IsAuditEnabled>1</IsAuditEnabled>
              <IsSecured>0</IsSecured>
              <IntroducedVersion>1.0.0.1</IntroducedVersion>
              <IsCustomizable>1</IsCustomizable>
              <IsRenameable>1</IsRenameable>
              <CanModifySearchSettings>1</CanModifySearchSettings>
              <CanModifyRequirementLevelSettings>1</CanModifyRequirementLevelSettings>
              <CanModifyAdditionalSettings>1</CanModifyAdditionalSettings>
              <SourceType>0</SourceType>
              <IsGlobalFilterEnabled>0</IsGlobalFilterEnabled>
              <IsSortableEnabled>0</IsSortableEnabled>
              <CanModifyGlobalFilterSettings>1</CanModifyGlobalFilterSettings>
              <CanModifyIsSortableSettings>1</CanModifyIsSortableSettings>
              <IsDataSourceSecret>0</IsDataSourceSecret>
              <AutoNumberFormat></AutoNumberFormat>
              <IsSearchable>0</IsSearchable>
              <IsFilterable>0</IsFilterable>
              <IsRetrievable>0</IsRetrievable>
              <IsLocalizable>0</IsLocalizable>
              <Format>textarea</Format>
              <MaxLength>100</MaxLength>
              <Length>200</Length>
              <displaynames>
                <displayname description="Description" languagecode="1033" />
              </displaynames>
              <Descriptions>
                <Description description="Description of assessment from intro screen of maker assessment app." languagecode="1033" />
              </Descriptions>
            </attribute>
            <attribute PhysicalName="mcapcoe_DLPPolicy">
              <Type>lookup</Type>
              <Name>mcapcoe_dlppolicy</Name>
              <LogicalName>mcapcoe_dlppolicy</LogicalName>
              <RequiredLevel>none</RequiredLevel>
              <DisplayMask>ValidForAdvancedFind|ValidForForm|ValidForGrid</DisplayMask>
              <ValidForUpdateApi>1</ValidForUpdateApi>
              <ValidForReadApi>1</ValidForReadApi>
              <ValidForCreateApi>1</ValidForCreateApi>
              <IsCustomField>1</IsCustomField>
              <IsAuditEnabled>0</IsAuditEnabled>
              <IsSecured>0</IsSecured>
              <IntroducedVersion>1.0.0.1</IntroducedVersion>
              <IsCustomizable>1</IsCustomizable>
              <IsRenameable>1</IsRenameable>
              <CanModifySearchSettings>1</CanModifySearchSettings>
              <CanModifyRequirementLevelSettings>1</CanModifyRequirementLevelSettings>
              <CanModifyAdditionalSettings>1</CanModifyAdditionalSettings>
              <SourceType>0</SourceType>
              <IsGlobalFilterEnabled>0</IsGlobalFilterEnabled>
              <IsSortableEnabled>0</IsSortableEnabled>
              <CanModifyGlobalFilterSettings>1</CanModifyGlobalFilterSettings>
              <CanModifyIsSortableSettings>1</CanModifyIsSortableSettings>
              <IsDataSourceSecret>0</IsDataSourceSecret>
              <AutoNumberFormat></AutoNumberFormat>
              <IsSearchable>0</IsSearchable>
              <IsFilterable>0</IsFilterable>
              <IsRetrievable>0</IsRetrievable>
              <IsLocalizable>0</IsLocalizable>
              <LookupStyle>single</LookupStyle>
              <LookupTypes />
              <displaynames>
                <displayname description="DLP Policy" languagecode="1033" />
              </displaynames>
              <Descriptions>
                <Description description="" languagecode="1033" />
              </Descriptions>
            </attribute>
          </attributes>
        </entity>
      </EntityInfo>
      <RibbonDiffXml>
        <CustomActions />
        <Templates>
          <RibbonTemplates Id="Mscrm.Templates"></RibbonTemplates>
        </Templates>
        <CommandDefinitions />
        <RuleDefinitions>
          <TabDisplayRules />
          <DisplayRules />
          <EnableRules />
        </RuleDefinitions>
        <LocLabels />
      </RibbonDiffXml>
    </Entity>
  </Entities>
  <Roles></Roles>
  <Workflows></Workflows>
  <FieldSecurityProfiles></FieldSecurityProfiles>
  <Templates />
  <EntityMaps />
  <EntityRelationships />
  <OrganizationSettings />
  <optionsets />
  <CustomControls />
  <EntityDataProviders />
  <Languages>
    <Language>1033</Language>
  </Languages>
</ImportExportXml>
