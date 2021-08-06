import { mutationField, nonNull } from 'nexus'

export const CampaignCreateOneMutation = mutationField('createOneCampaign', {
  type: nonNull('Campaign'),
  args: {
    data: nonNull('CampaignCreateInput'),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.campaign.create({
      data,
      ...select,
    })
  },
})
