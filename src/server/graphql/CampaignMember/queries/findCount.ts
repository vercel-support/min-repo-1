import { queryField, nonNull, list } from 'nexus'

export const CampaignMemberFindCountQuery = queryField(
  'findManyCampaignMemberCount',
  {
    type: nonNull('Int'),
    args: {
      where: 'CampaignMemberWhereInput',
      orderBy: list('CampaignMemberOrderByInput'),
      cursor: 'CampaignMemberWhereUniqueInput',
      distinct: 'CampaignMemberScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma }) {
      return prisma.campaignMember.count(args as any)
    },
  },
)
