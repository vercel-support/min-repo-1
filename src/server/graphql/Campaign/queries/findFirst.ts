import { queryField, list } from 'nexus'

export const CampaignFindFirstQuery = queryField('findFirstCampaign', {
  type: 'Campaign',
  args: {
    where: 'CampaignWhereInput',
    orderBy: list('CampaignOrderByInput'),
    cursor: 'CampaignWhereUniqueInput',
    distinct: 'CampaignScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.campaign.findFirst({
      ...args,
      ...select,
    })
  },
})
