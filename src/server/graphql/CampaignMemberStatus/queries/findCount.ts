import { queryField, nonNull, list } from 'nexus'

export const CampaignMemberStatusFindCountQuery = queryField(
  'findManyCampaignMemberStatusCount',
  {
    type: nonNull('Int'),
    args: {
      where: 'CampaignMemberStatusWhereInput',
      orderBy: list('CampaignMemberStatusOrderByInput'),
      cursor: 'CampaignMemberStatusWhereUniqueInput',
      distinct: 'CampaignMemberStatusScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma }) {
      return prisma.campaignMemberStatus.count(args as any)
    },
  },
)
