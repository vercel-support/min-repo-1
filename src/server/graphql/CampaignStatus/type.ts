import { objectType } from 'nexus'

export const CampaignStatus = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'CampaignStatus',
  definition(t) {
    t.string('id')
    t.nullable.string('name')
    t.list.field('CampaignStatus', {
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
        return root.CampaignStatus
      },
    })
    t.nullable.field('_count', {
      type: 'CampaignStatusCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
