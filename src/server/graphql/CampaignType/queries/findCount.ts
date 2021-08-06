import { queryField, nonNull, list } from 'nexus'

export const CampaignTypeFindCountQuery = queryField(
  'findManyCampaignTypeCount',
  {
    type: nonNull('Int'),
    args: {
      where: 'CampaignTypeWhereInput',
      orderBy: list('CampaignTypeOrderByInput'),
      cursor: 'CampaignTypeWhereUniqueInput',
      distinct: 'CampaignTypeScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma }) {
      return prisma.campaignType.count(args as any)
    },
  },
)
