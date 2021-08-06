import { queryField, nonNull, list } from 'nexus'

export const CampaignFindCountQuery = queryField('findManyCampaignCount', {
  type: nonNull('Int'),
  args: {
    where: 'CampaignWhereInput',
    orderBy: list('CampaignOrderByInput'),
    cursor: 'CampaignWhereUniqueInput',
    distinct: 'CampaignScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.campaign.count(args as any)
  },
})
