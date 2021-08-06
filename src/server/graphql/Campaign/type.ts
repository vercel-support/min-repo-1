import { objectType } from 'nexus'

export const Campaign = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Campaign',
  definition(t) {
    t.string('id')
    t.nullable.boolean('isActive')
    t.nullable.int('actualCost')
    t.nullable.int('hierarchyActualCost')
    t.nullable.int('budgetedCost')
    t.nullable.int('hierarchyBudgetedCost')
    t.nullable.string('name')
    t.nullable.string('ownerId')
    t.nullable.int('numberOfContacts')
    t.nullable.int('hierarchyNumberOfContacts')
    t.nullable.int('numberOfConvertedLeads')
    t.nullable.int('hierarchyNumberOfConvertedLeads')
    t.nullable.field('createdBy', {
      type: 'User',
      resolve(root: any) {
        return root.createdBy
      },
    })
    t.nullable.string('createdById')
    t.nullable.string('description')
    t.nullable.field('endDate', { type: 'DateTime' })
    t.nullable.string('expectedResponse')
    t.nullable.int('expectedRevenue')
    t.nullable.int('hierarchyExpectedRevenue')
    t.nullable.field('lastModifiedBy', {
      type: 'User',
      resolve(root: any) {
        return root.lastModifiedBy
      },
    })
    t.nullable.string('lastModifiedById')
    t.nullable.field('updateAt', { type: 'DateTime' })
    t.nullable.int('numberOfLeads')
    t.nullable.int('hierarchyNumberOfLeads')
    t.nullable.int('numberSent')
    t.nullable.int('hierarchyNumberSent')
    t.nullable.int('numberOfOpportunities')
    t.nullable.int('hierarchyNumberOfOpportunities')
    t.nullable.int('numberOfResponses')
    t.nullable.int('hierarchyNumberOfResponses')
    t.nullable.field('startDate', { type: 'DateTime' })
    t.nullable.int('amountAllOpportunities')
    t.nullable.int('hierarchyAmountAllOpportunities')
    t.nullable.int('amountWonOpportunities')
    t.nullable.int('hierarchyAmountWonOpportunities')
    t.nullable.int('numberOfWonOpportunities')
    t.nullable.int('hierarchyNumberOfWonOpportunities')
    t.nullable.field('campaignStatus', {
      type: 'CampaignStatus',
      resolve(root: any) {
        return root.campaignStatus
      },
    })
    t.nullable.string('campaignStatusId')
    t.nullable.field('campaignType', {
      type: 'CampaignType',
      resolve(root: any) {
        return root.campaignType
      },
    })
    t.nullable.string('campaignTypeId')
    t.nullable.field('campaignMember', {
      type: 'CampaignMember',
      resolve(root: any) {
        return root.campaignMember
      },
    })
    t.nullable.string('campaignMemberId')
    t.list.field('CampaignMemberCampaign', {
      type: 'CampaignMember',
      args: {
        where: 'CampaignMemberWhereInput',
        orderBy: 'CampaignMemberOrderByInput',
        cursor: 'CampaignMemberWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'CampaignMemberScalarFieldEnum',
      },
      resolve(root: any) {
        return root.CampaignMemberCampaign
      },
    })
    t.list.field('OpportunityCampaign', {
      type: 'Opportunity',
      args: {
        where: 'OpportunityWhereInput',
        orderBy: 'OpportunityOrderByInput',
        cursor: 'OpportunityWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'OpportunityScalarFieldEnum',
      },
      resolve(root: any) {
        return root.OpportunityCampaign
      },
    })
    t.nullable.field('_count', {
      type: 'CampaignCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
