import { objectType } from 'nexus'

export const CampaignMember = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'CampaignMember',
  definition(t) {
    t.string('id')
    t.nullable.field('campaign', {
      type: 'Campaign',
      resolve(root: any) {
        return root.campaign
      },
    })
    t.nullable.string('campaignId')
    t.nullable.string('city')
    t.nullable.string('companyOrAccount')
    t.nullable.field('contact', {
      type: 'Contact',
      resolve(root: any) {
        return root.contact
      },
    })
    t.nullable.string('contactId')
    t.nullable.string('country')
    t.nullable.field('createdBy', {
      type: 'User',
      resolve(root: any) {
        return root.createdBy
      },
    })
    t.nullable.string('createdById')
    t.nullable.field('createdAt', { type: 'DateTime' })
    t.nullable.string('description')
    t.nullable.boolean('doNotCall')
    t.nullable.string('email')
    t.nullable.string('fax')
    t.nullable.boolean('hasOptedOutOfEmail')
    t.nullable.string('firstName')
    t.nullable.field('firstRespondedDate', { type: 'DateTime' })
    t.nullable.field('lastModifiedBy', {
      type: 'User',
      resolve(root: any) {
        return root.lastModifiedBy
      },
    })
    t.nullable.string('lastModifiedById')
    t.nullable.field('updatedAt', { type: 'DateTime' })
    t.nullable.string('lastName')
    t.nullable.string('leadId')
    t.nullable.field('leadSource', {
      type: 'LeadSource',
      resolve(root: any) {
        return root.leadSource
      },
    })
    t.nullable.string('leadSourceId')
    t.nullable.string('mobilePhone')
    t.nullable.string('phone')
    t.nullable.boolean('hasResponded')
    t.nullable.field('salutation', {
      type: 'Salutation',
      resolve(root: any) {
        return root.salutation
      },
    })
    t.nullable.string('salutationId')
    t.nullable.string('state')
    t.nullable.field('status', {
      type: 'CampaignMemberStatus',
      resolve(root: any) {
        return root.status
      },
    })
    t.nullable.string('statusId')
    t.nullable.string('street')
    t.nullable.string('title')
    t.nullable.string('postalCode')
    t.list.field('CampaignMember', {
      type: 'Campaign',
      args: {
        where: 'CampaignWhereInput',
        orderBy: 'CampaignOrderByInput',
        cursor: 'CampaignWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'CampaignScalarFieldEnum',
      },
      resolve(root: any) {
        return root.CampaignMember
      },
    })
    t.nullable.field('_count', {
      type: 'CampaignMemberCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
