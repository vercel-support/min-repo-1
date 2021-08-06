import { objectType } from 'nexus'

export const CampaignType = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'CampaignType',
  definition(t) {
    t.string('id')
    t.nullable.string('name')
    t.list.field('CampaignType', {
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
        return root.CampaignType
      },
    })
    t.nullable.field('_count', {
      type: 'CampaignTypeCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
