import { objectType } from 'nexus'

export const CampaignMemberStatus = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'CampaignMemberStatus',
  definition(t) {
    t.string('id')
    t.nullable.string('name')
    t.list.field('CampaignMemberStatus', {
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
        return root.CampaignMemberStatus
      },
    })
    t.nullable.field('_count', {
      type: 'CampaignMemberStatusCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
