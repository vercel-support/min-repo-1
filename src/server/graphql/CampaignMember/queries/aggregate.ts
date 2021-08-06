import { queryField, list } from 'nexus'

export const CampaignMemberAggregateQuery = queryField(
  'aggregateCampaignMember',
  {
    type: 'AggregateCampaignMember',
    args: {
      where: 'CampaignMemberWhereInput',
      orderBy: list('CampaignMemberOrderByInput'),
      cursor: 'CampaignMemberWhereUniqueInput',
      distinct: 'CampaignMemberScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.campaignMember.aggregate({ ...args, ...select }) as any
    },
  },
)
