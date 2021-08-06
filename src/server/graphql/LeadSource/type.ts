import { objectType } from 'nexus'

export const LeadSource = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'LeadSource',
  definition(t) {
    t.string('id')
    t.nullable.string('name')
    t.list.field('CampaignMemberLeadSource', {
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
        return root.CampaignMemberLeadSource
      },
    })
    t.list.field('OpportunityLeadSource', {
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
        return root.OpportunityLeadSource
      },
    })
    t.list.field('ContactCreatedFromLeadSource', {
      type: 'Contact',
      args: {
        where: 'ContactWhereInput',
        orderBy: 'ContactOrderByInput',
        cursor: 'ContactWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'ContactScalarFieldEnum',
      },
      resolve(root: any) {
        return root.ContactCreatedFromLeadSource
      },
    })
    t.list.field('ContactLeadSource', {
      type: 'Contact',
      args: {
        where: 'ContactWhereInput',
        orderBy: 'ContactOrderByInput',
        cursor: 'ContactWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'ContactScalarFieldEnum',
      },
      resolve(root: any) {
        return root.ContactLeadSource
      },
    })
    t.list.field('AccountLeadSource', {
      type: 'Account',
      args: {
        where: 'AccountWhereInput',
        orderBy: 'AccountOrderByInput',
        cursor: 'AccountWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'AccountScalarFieldEnum',
      },
      resolve(root: any) {
        return root.AccountLeadSource
      },
    })
    t.nullable.field('_count', {
      type: 'LeadSourceCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
