import { queryField, list } from 'nexus'

export const CampaignAggregateQuery = queryField('aggregateCampaign', {
  type: 'AggregateCampaign',
  args: {
    where: 'CampaignWhereInput',
    orderBy: list('CampaignOrderByInput'),
    cursor: 'CampaignWhereUniqueInput',
    distinct: 'CampaignScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.campaign.aggregate({ ...args, ...select }) as any
  },
})
