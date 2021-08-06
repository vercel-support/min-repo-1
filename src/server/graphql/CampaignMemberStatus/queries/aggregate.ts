import { queryField, list } from 'nexus'

export const CampaignMemberStatusAggregateQuery = queryField(
  'aggregateCampaignMemberStatus',
  {
    type: 'AggregateCampaignMemberStatus',
    args: {
      where: 'CampaignMemberStatusWhereInput',
      orderBy: list('CampaignMemberStatusOrderByInput'),
      cursor: 'CampaignMemberStatusWhereUniqueInput',
      distinct: 'CampaignMemberStatusScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.campaignMemberStatus.aggregate({
        ...args,
        ...select,
      }) as any
    },
  },
)
