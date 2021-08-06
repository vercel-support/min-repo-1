import { queryField, list } from 'nexus'

export const CampaignTypeFindFirstQuery = queryField('findFirstCampaignType', {
  type: 'CampaignType',
  args: {
    where: 'CampaignTypeWhereInput',
    orderBy: list('CampaignTypeOrderByInput'),
    cursor: 'CampaignTypeWhereUniqueInput',
    distinct: 'CampaignTypeScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.campaignType.findFirst({
      ...args,
      ...select,
    })
  },
})
