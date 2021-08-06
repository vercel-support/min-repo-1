import { mutationField, nonNull } from 'nexus'

export const CampaignUpdateOneMutation = mutationField('updateOneCampaign', {
  type: nonNull('Campaign'),
  args: {
    where: nonNull('CampaignWhereUniqueInput'),
    data: nonNull('CampaignUpdateInput'),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.campaign.update({
      where,
      data,
      ...select,
    })
  },
})
