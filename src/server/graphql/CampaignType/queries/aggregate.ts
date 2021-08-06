import { queryField, list } from 'nexus'

export const CampaignTypeAggregateQuery = queryField('aggregateCampaignType', {
  type: 'AggregateCampaignType',
  args: {
    where: 'CampaignTypeWhereInput',
    orderBy: list('CampaignTypeOrderByInput'),
    cursor: 'CampaignTypeWhereUniqueInput',
    distinct: 'CampaignTypeScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.campaignType.aggregate({ ...args, ...select }) as any
  },
})
